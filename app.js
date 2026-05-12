const weekdays = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
const signalLabels = {
  stable: "ราคาปกติ",
  high: "สูงกว่าจังหวะเฉลี่ย",
  low: "ต่ำกว่าจังหวะเฉลี่ย",
};

let forecastData = window.OIL_PALM_FORECAST;
let currentMonthKey = null;
let currentView = "single";
let selectedDay = null;

const monthSelect = document.querySelector("#monthSelect");
const calendarMount = document.querySelector("#calendarMount");
const avgPrice = document.querySelector("#avgPrice");
const minPrice = document.querySelector("#minPrice");
const maxPrice = document.querySelector("#maxPrice");
const forecastRange = document.querySelector("#forecastRange");
const trainingRange = document.querySelector("#trainingRange");
const modelName = document.querySelector("#modelName");
const modelMetric = document.querySelector("#modelMetric");
const sourceText = document.querySelector("#sourceText");
const sourceLinks = document.querySelector("#sourceLinks");
const insightDate = document.querySelector("#insightDate");
const insightPrice = document.querySelector("#insightPrice");
const insightRange = document.querySelector("#insightRange");
const insightSignal = document.querySelector("#insightSignal");

async function loadData() {
  if (forecastData) return forecastData;
  const response = await fetch("assets/data/predictions_2569_2570.json");
  forecastData = await response.json();
  return forecastData;
}

function baht(value) {
  return new Intl.NumberFormat("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function weekdayOffset(year, month) {
  return new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
}

function getMonth(key) {
  return forecastData.months.find((month) => month.key === key);
}

function pricePercent(day) {
  const prices = forecastData.predictions.map((item) => item.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return Math.round(((day.price - min) / (max - min)) * 100);
}

function setSummary(month) {
  avgPrice.textContent = baht(month.average);
  minPrice.textContent = baht(month.min);
  maxPrice.textContent = baht(month.max);
  forecastRange.textContent = `${forecastData.forecastStartBE} - ${forecastData.forecastEndBE}`;
  trainingRange.textContent = `Train: ${forecastData.model.trainingStart} ถึง ${forecastData.model.trainingEnd}`;
}

function setInsight(day) {
  selectedDay = day;
  insightDate.textContent = day ? day.label : "เลือกวันที่บนปฏิทิน";
  insightPrice.textContent = day ? `${baht(day.price)} บาท/กก.` : "-";
  insightRange.textContent = day ? `${baht(day.lower)} - ${baht(day.upper)}` : "-";
  insightSignal.textContent = day ? signalLabels[day.signal] : "-";
  insightSignal.className = day ? `signal-text ${day.signal}` : "signal-text";
}

function updateDaySelection(date) {
  document.querySelectorAll(".day-cell.selected").forEach((cell) => {
    cell.classList.remove("selected");
  });
  const activeCell = document.querySelector(`.day-cell[data-date="${date}"]`);
  if (activeCell) {
    activeCell.classList.add("selected");
  }
}

function createMonthButton(month) {
  const button = document.createElement("button");
  button.className = `month-chip${month.key === currentMonthKey ? " active" : ""}`;
  button.type = "button";
  button.dataset.month = month.key;
  button.innerHTML = `
    <span>${month.title}</span>
    <strong>${baht(month.average)}</strong>
    <small>${baht(month.min)} - ${baht(month.max)} บาท/กก.</small>
  `;
  button.addEventListener("click", () => {
    currentMonthKey = month.key;
    monthSelect.value = month.key;
    setInsight(month.days[0]);
    render();
  });
  return button;
}

function renderMonthRail() {
  const rail = document.createElement("div");
  rail.className = "month-rail";
  forecastData.months.forEach((month) => rail.appendChild(createMonthButton(month)));
  return rail;
}

function renderCalendar(month) {
  const wrapper = document.createElement("article");
  wrapper.className = "month-calendar";

  const header = document.createElement("div");
  header.className = "month-header";
  header.innerHTML = `
    <div>
      <span>ปฏิทินราคา</span>
      <h2>${month.title}</h2>
    </div>
    <div class="month-range">
      <span>${baht(month.min)}</span>
      <i></i>
      <strong>${baht(month.max)}</strong>
    </div>
  `;
  wrapper.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "calendar-grid";
  weekdays.forEach((day) => {
    const label = document.createElement("div");
    label.className = "weekday";
    label.textContent = day;
    grid.appendChild(label);
  });

  const offset = weekdayOffset(month.year, month.month);
  for (let i = 0; i < offset; i++) {
    const blank = document.createElement("div");
    blank.className = "day-cell blank";
    grid.appendChild(blank);
  }

  month.days.forEach((day, index) => {
    const cell = document.createElement("button");
    const active = selectedDay?.date === day.date ? " selected" : "";
    cell.className = `day-cell ${day.signal}${active}`;
    cell.type = "button";
    cell.dataset.date = day.date;
    cell.style.setProperty("--stagger", `${index * 18}ms`);
    cell.style.setProperty("--heat", `${pricePercent(day)}%`);
    cell.title = `${day.label}: ${baht(day.price)} บาท/กก. ช่วงประมาณ ${baht(day.lower)}-${baht(day.upper)}`;
    cell.innerHTML = `
      <span class="day-number">${day.day}</span>
      <strong>${baht(day.price)}</strong>
      <small>บาท/กก.</small>
    `;
    cell.addEventListener("click", () => {
      setInsight(day);
      updateDaySelection(day.date);
    });
    grid.appendChild(cell);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

function renderSources() {
  modelName.textContent = forecastData.model.name;
  modelMetric.textContent = `Backtest MAPE ${forecastData.model.backtest.mape}% | RMSE ${forecastData.model.backtest.rmse}`;
  sourceText.textContent =
    "โมเดลใช้ข้อมูล PDF รายวันจากกรมการค้าภายใน แปลงช่วงราคาต่ำ-สูงเป็นราคากลาง แล้วพยากรณ์ด้วย adaptive seasonal regression ที่ปรับระดับราคาตามข้อมูลล่าสุด จึงเหมาะสำหรับใช้เป็นแนวโน้มประกอบการตัดสินใจ ไม่ใช่ราคาซื้อขายยืนยันจากลานเท";
  sourceLinks.innerHTML = "";
  forecastData.sources.forEach((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.name;
    sourceLinks.appendChild(link);
  });
}

function render() {
  const selected = getMonth(currentMonthKey);
  setSummary(selected);
  calendarMount.classList.add("is-switching");

  window.requestAnimationFrame(() => {
    calendarMount.innerHTML = "";
    calendarMount.appendChild(renderMonthRail());

    const calendars = document.createElement("div");
    calendars.className = currentView === "all" ? "all-calendars" : "single-calendar";
    const months = currentView === "all" ? forecastData.months : [selected];
    months.forEach((month) => calendars.appendChild(renderCalendar(month)));
    calendarMount.appendChild(calendars);
    calendarMount.classList.remove("is-switching");
  });

  document.querySelectorAll(".toggle-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === currentView);
  });
}

async function init() {
  await loadData();
  currentMonthKey = forecastData.months[0].key;
  setInsight(forecastData.months[0].days[0]);

  forecastData.months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month.key;
    option.textContent = month.title;
    monthSelect.appendChild(option);
  });

  monthSelect.addEventListener("change", (event) => {
    currentMonthKey = event.target.value;
    setInsight(getMonth(currentMonthKey).days[0]);
    render();
  });

  document.querySelectorAll(".toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      render();
    });
  });

  renderSources();
  render();
}

init().catch((error) => {
  calendarMount.innerHTML = `<p class="error-box">โหลดข้อมูลไม่สำเร็จ: ${error.message}</p>`;
});
