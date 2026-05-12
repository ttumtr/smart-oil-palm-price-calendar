window.OIL_PALM_FORECAST = {
  "project": "Smart Oil Palm Price Calendar",
  "target": "ราคาปาล์มทะลาย โรงงานรับซื้อ 18%: แหล่งผลิตสำคัญ 3 จังหวัด",
  "unit": "บาท/กก.",
  "forecastStart": "2026-06-01",
  "forecastEnd": "2027-05-31",
  "forecastStartBE": "1 มิถุนายน 2569",
  "forecastEndBE": "31 พฤษภาคม 2570",
  "generatedAt": "2026-05-12T07:18:29.064Z",
  "model": {
    "name": "Adaptive seasonal ridge regression",
    "description": "ดึงราคาจาก PDF รายวันของกรมการค้าภายใน แปลงช่วงราคาต่ำ-สูงเป็นราคากลาง เติมวันว่างด้วย interpolation แล้วเรียนรู้ trend + seasonality พร้อม adaptive residual correction จากข้อมูลล่าสุด",
    "backtest": {
      "holdoutDays": 90,
      "mape": 9.46,
      "rmse": 0.812,
      "method": "90-day holdout backtest",
      "preview": [
        {
          "date": "2026-01-01",
          "actual": 6.1,
          "predicted": 7.05
        },
        {
          "date": "2026-01-02",
          "actual": 6.1,
          "predicted": 7.06
        },
        {
          "date": "2026-01-03",
          "actual": 6.1,
          "predicted": 7.07
        },
        {
          "date": "2026-01-04",
          "actual": 6.1,
          "predicted": 7.09
        },
        {
          "date": "2026-01-05",
          "actual": 6.1,
          "predicted": 7.11
        },
        {
          "date": "2026-01-06",
          "actual": 6.1,
          "predicted": 7.13
        },
        {
          "date": "2026-01-07",
          "actual": 6.1,
          "predicted": 7.14
        },
        {
          "date": "2026-01-08",
          "actual": 6.1,
          "predicted": 7.15
        },
        {
          "date": "2026-01-09",
          "actual": 6.1,
          "predicted": 7.16
        },
        {
          "date": "2026-01-10",
          "actual": 6.12,
          "predicted": 7.18
        }
      ]
    },
    "observedRows": 1519,
    "dailyTrainingRows": 2588,
    "trainingStart": "2019-03-01",
    "trainingEnd": "2026-03-31",
    "adaptiveCorrection": {
      "recentResidual": 0.049,
      "residualHalfLifeDays": 60,
      "trendPerDay": 0.0143,
      "lastObservedDate": "2026-03-31"
    }
  },
  "sources": [
    {
      "name": "กรมการค้าภายใน กระทรวงพาณิชย์ - ราคาผลปาล์มและน้ำมันปาล์มรายวัน",
      "url": "https://agri.dit.go.th/index.php/department_doc/3/%E0%B8%9B%E0%B8%B2%E0%B8%A5%E0%B9%8C%E0%B8%A1%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%20%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%9C%E0%B8%A5%E0%B8%9B%E0%B8%B2%E0%B8%A5%E0%B9%8C%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%9B%E0%B8%B2%E0%B8%A5%E0%B9%8C%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/28"
    },
    {
      "name": "OPPORI PSU - หน้ารวมข้อมูลและสถิติราคา",
      "url": "https://oppori.psu.ac.th/index.php/statistics/price"
    }
  ],
  "months": [
    {
      "key": "2026-06",
      "month": 6,
      "year": 2026,
      "beYear": 2569,
      "title": "มิถุนายน 2569",
      "days": [
        {
          "date": "2026-06-01",
          "day": 1,
          "price": 7.04,
          "lower": 6.23,
          "upper": 7.85,
          "signal": "stable",
          "label": "1 มิถุนายน 2569"
        },
        {
          "date": "2026-06-02",
          "day": 2,
          "price": 7.04,
          "lower": 6.23,
          "upper": 7.85,
          "signal": "stable",
          "label": "2 มิถุนายน 2569"
        },
        {
          "date": "2026-06-03",
          "day": 3,
          "price": 7.04,
          "lower": 6.22,
          "upper": 7.86,
          "signal": "stable",
          "label": "3 มิถุนายน 2569"
        },
        {
          "date": "2026-06-04",
          "day": 4,
          "price": 7.04,
          "lower": 6.22,
          "upper": 7.86,
          "signal": "stable",
          "label": "4 มิถุนายน 2569"
        },
        {
          "date": "2026-06-05",
          "day": 5,
          "price": 7.04,
          "lower": 6.22,
          "upper": 7.86,
          "signal": "stable",
          "label": "5 มิถุนายน 2569"
        },
        {
          "date": "2026-06-06",
          "day": 6,
          "price": 7.04,
          "lower": 6.22,
          "upper": 7.86,
          "signal": "stable",
          "label": "6 มิถุนายน 2569"
        },
        {
          "date": "2026-06-07",
          "day": 7,
          "price": 7.04,
          "lower": 6.22,
          "upper": 7.86,
          "signal": "stable",
          "label": "7 มิถุนายน 2569"
        },
        {
          "date": "2026-06-08",
          "day": 8,
          "price": 7.04,
          "lower": 6.21,
          "upper": 7.87,
          "signal": "stable",
          "label": "8 มิถุนายน 2569"
        },
        {
          "date": "2026-06-09",
          "day": 9,
          "price": 7.05,
          "lower": 6.22,
          "upper": 7.88,
          "signal": "stable",
          "label": "9 มิถุนายน 2569"
        },
        {
          "date": "2026-06-10",
          "day": 10,
          "price": 7.05,
          "lower": 6.22,
          "upper": 7.88,
          "signal": "stable",
          "label": "10 มิถุนายน 2569"
        },
        {
          "date": "2026-06-11",
          "day": 11,
          "price": 7.04,
          "lower": 6.21,
          "upper": 7.87,
          "signal": "stable",
          "label": "11 มิถุนายน 2569"
        },
        {
          "date": "2026-06-12",
          "day": 12,
          "price": 7.04,
          "lower": 6.21,
          "upper": 7.87,
          "signal": "stable",
          "label": "12 มิถุนายน 2569"
        },
        {
          "date": "2026-06-13",
          "day": 13,
          "price": 7.04,
          "lower": 6.2,
          "upper": 7.88,
          "signal": "stable",
          "label": "13 มิถุนายน 2569"
        },
        {
          "date": "2026-06-14",
          "day": 14,
          "price": 7.05,
          "lower": 6.21,
          "upper": 7.89,
          "signal": "stable",
          "label": "14 มิถุนายน 2569"
        },
        {
          "date": "2026-06-15",
          "day": 15,
          "price": 7.05,
          "lower": 6.21,
          "upper": 7.89,
          "signal": "stable",
          "label": "15 มิถุนายน 2569"
        },
        {
          "date": "2026-06-16",
          "day": 16,
          "price": 7.05,
          "lower": 6.21,
          "upper": 7.89,
          "signal": "stable",
          "label": "16 มิถุนายน 2569"
        },
        {
          "date": "2026-06-17",
          "day": 17,
          "price": 7.05,
          "lower": 6.21,
          "upper": 7.89,
          "signal": "stable",
          "label": "17 มิถุนายน 2569"
        },
        {
          "date": "2026-06-18",
          "day": 18,
          "price": 7.05,
          "lower": 6.2,
          "upper": 7.9,
          "signal": "stable",
          "label": "18 มิถุนายน 2569"
        },
        {
          "date": "2026-06-19",
          "day": 19,
          "price": 7.05,
          "lower": 6.2,
          "upper": 7.9,
          "signal": "stable",
          "label": "19 มิถุนายน 2569"
        },
        {
          "date": "2026-06-20",
          "day": 20,
          "price": 7.05,
          "lower": 6.2,
          "upper": 7.9,
          "signal": "stable",
          "label": "20 มิถุนายน 2569"
        },
        {
          "date": "2026-06-21",
          "day": 21,
          "price": 7.05,
          "lower": 6.2,
          "upper": 7.9,
          "signal": "stable",
          "label": "21 มิถุนายน 2569"
        },
        {
          "date": "2026-06-22",
          "day": 22,
          "price": 7.05,
          "lower": 6.2,
          "upper": 7.9,
          "signal": "stable",
          "label": "22 มิถุนายน 2569"
        },
        {
          "date": "2026-06-23",
          "day": 23,
          "price": 7.05,
          "lower": 6.19,
          "upper": 7.91,
          "signal": "stable",
          "label": "23 มิถุนายน 2569"
        },
        {
          "date": "2026-06-24",
          "day": 24,
          "price": 7.05,
          "lower": 6.19,
          "upper": 7.91,
          "signal": "stable",
          "label": "24 มิถุนายน 2569"
        },
        {
          "date": "2026-06-25",
          "day": 25,
          "price": 7.05,
          "lower": 6.19,
          "upper": 7.91,
          "signal": "stable",
          "label": "25 มิถุนายน 2569"
        },
        {
          "date": "2026-06-26",
          "day": 26,
          "price": 7.05,
          "lower": 6.19,
          "upper": 7.91,
          "signal": "stable",
          "label": "26 มิถุนายน 2569"
        },
        {
          "date": "2026-06-27",
          "day": 27,
          "price": 7.04,
          "lower": 6.18,
          "upper": 7.9,
          "signal": "stable",
          "label": "27 มิถุนายน 2569"
        },
        {
          "date": "2026-06-28",
          "day": 28,
          "price": 7.04,
          "lower": 6.17,
          "upper": 7.91,
          "signal": "stable",
          "label": "28 มิถุนายน 2569"
        },
        {
          "date": "2026-06-29",
          "day": 29,
          "price": 7.06,
          "lower": 6.19,
          "upper": 7.93,
          "signal": "stable",
          "label": "29 มิถุนายน 2569"
        },
        {
          "date": "2026-06-30",
          "day": 30,
          "price": 7.08,
          "lower": 6.21,
          "upper": 7.95,
          "signal": "stable",
          "label": "30 มิถุนายน 2569"
        }
      ],
      "average": 7.05,
      "min": 7.04,
      "max": 7.08
    },
    {
      "key": "2026-07",
      "month": 7,
      "year": 2026,
      "beYear": 2569,
      "title": "กรกฎาคม 2569",
      "days": [
        {
          "date": "2026-07-01",
          "day": 1,
          "price": 7.09,
          "lower": 6.22,
          "upper": 7.96,
          "signal": "stable",
          "label": "1 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-02",
          "day": 2,
          "price": 7.1,
          "lower": 6.23,
          "upper": 7.97,
          "signal": "stable",
          "label": "2 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-03",
          "day": 3,
          "price": 7.11,
          "lower": 6.23,
          "upper": 7.99,
          "signal": "stable",
          "label": "3 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-04",
          "day": 4,
          "price": 7.11,
          "lower": 6.23,
          "upper": 7.99,
          "signal": "stable",
          "label": "4 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-05",
          "day": 5,
          "price": 7.11,
          "lower": 6.23,
          "upper": 7.99,
          "signal": "stable",
          "label": "5 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-06",
          "day": 6,
          "price": 7.11,
          "lower": 6.23,
          "upper": 7.99,
          "signal": "stable",
          "label": "6 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-07",
          "day": 7,
          "price": 7.11,
          "lower": 6.23,
          "upper": 7.99,
          "signal": "stable",
          "label": "7 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-08",
          "day": 8,
          "price": 7.1,
          "lower": 6.21,
          "upper": 7.99,
          "signal": "stable",
          "label": "8 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-09",
          "day": 9,
          "price": 7.1,
          "lower": 6.21,
          "upper": 7.99,
          "signal": "stable",
          "label": "9 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-10",
          "day": 10,
          "price": 7.09,
          "lower": 6.2,
          "upper": 7.98,
          "signal": "stable",
          "label": "10 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-11",
          "day": 11,
          "price": 7.09,
          "lower": 6.2,
          "upper": 7.98,
          "signal": "stable",
          "label": "11 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-12",
          "day": 12,
          "price": 7.09,
          "lower": 6.2,
          "upper": 7.98,
          "signal": "stable",
          "label": "12 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-13",
          "day": 13,
          "price": 7.08,
          "lower": 6.18,
          "upper": 7.98,
          "signal": "stable",
          "label": "13 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-14",
          "day": 14,
          "price": 7.08,
          "lower": 6.18,
          "upper": 7.98,
          "signal": "stable",
          "label": "14 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-15",
          "day": 15,
          "price": 7.08,
          "lower": 6.18,
          "upper": 7.98,
          "signal": "stable",
          "label": "15 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-16",
          "day": 16,
          "price": 7.07,
          "lower": 6.17,
          "upper": 7.97,
          "signal": "stable",
          "label": "16 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-17",
          "day": 17,
          "price": 7.06,
          "lower": 6.16,
          "upper": 7.96,
          "signal": "stable",
          "label": "17 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-18",
          "day": 18,
          "price": 7.06,
          "lower": 6.15,
          "upper": 7.97,
          "signal": "stable",
          "label": "18 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-19",
          "day": 19,
          "price": 7.05,
          "lower": 6.14,
          "upper": 7.96,
          "signal": "stable",
          "label": "19 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-20",
          "day": 20,
          "price": 7.05,
          "lower": 6.14,
          "upper": 7.96,
          "signal": "stable",
          "label": "20 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-21",
          "day": 21,
          "price": 7.05,
          "lower": 6.14,
          "upper": 7.96,
          "signal": "stable",
          "label": "21 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-22",
          "day": 22,
          "price": 7.04,
          "lower": 6.13,
          "upper": 7.95,
          "signal": "stable",
          "label": "22 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-23",
          "day": 23,
          "price": 7.03,
          "lower": 6.11,
          "upper": 7.95,
          "signal": "stable",
          "label": "23 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-24",
          "day": 24,
          "price": 7.03,
          "lower": 6.11,
          "upper": 7.95,
          "signal": "stable",
          "label": "24 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-25",
          "day": 25,
          "price": 7.02,
          "lower": 6.1,
          "upper": 7.94,
          "signal": "stable",
          "label": "25 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-26",
          "day": 26,
          "price": 7.02,
          "lower": 6.1,
          "upper": 7.94,
          "signal": "stable",
          "label": "26 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-27",
          "day": 27,
          "price": 7.01,
          "lower": 6.09,
          "upper": 7.93,
          "signal": "stable",
          "label": "27 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-28",
          "day": 28,
          "price": 7.01,
          "lower": 6.08,
          "upper": 7.94,
          "signal": "stable",
          "label": "28 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-29",
          "day": 29,
          "price": 7,
          "lower": 6.07,
          "upper": 7.93,
          "signal": "stable",
          "label": "29 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-30",
          "day": 30,
          "price": 7.04,
          "lower": 6.11,
          "upper": 7.97,
          "signal": "stable",
          "label": "30 กรกฎาคม 2569"
        },
        {
          "date": "2026-07-31",
          "day": 31,
          "price": 7.07,
          "lower": 6.14,
          "upper": 8,
          "signal": "stable",
          "label": "31 กรกฎาคม 2569"
        }
      ],
      "average": 7.07,
      "min": 7,
      "max": 7.11
    },
    {
      "key": "2026-08",
      "month": 8,
      "year": 2026,
      "beYear": 2569,
      "title": "สิงหาคม 2569",
      "days": [
        {
          "date": "2026-08-01",
          "day": 1,
          "price": 7.1,
          "lower": 6.17,
          "upper": 8.03,
          "signal": "stable",
          "label": "1 สิงหาคม 2569"
        },
        {
          "date": "2026-08-02",
          "day": 2,
          "price": 7.14,
          "lower": 6.2,
          "upper": 8.08,
          "signal": "stable",
          "label": "2 สิงหาคม 2569"
        },
        {
          "date": "2026-08-03",
          "day": 3,
          "price": 7.18,
          "lower": 6.24,
          "upper": 8.12,
          "signal": "stable",
          "label": "3 สิงหาคม 2569"
        },
        {
          "date": "2026-08-04",
          "day": 4,
          "price": 7.17,
          "lower": 6.23,
          "upper": 8.11,
          "signal": "stable",
          "label": "4 สิงหาคม 2569"
        },
        {
          "date": "2026-08-05",
          "day": 5,
          "price": 7.17,
          "lower": 6.23,
          "upper": 8.11,
          "signal": "stable",
          "label": "5 สิงหาคม 2569"
        },
        {
          "date": "2026-08-06",
          "day": 6,
          "price": 7.16,
          "lower": 6.22,
          "upper": 8.1,
          "signal": "stable",
          "label": "6 สิงหาคม 2569"
        },
        {
          "date": "2026-08-07",
          "day": 7,
          "price": 7.16,
          "lower": 6.21,
          "upper": 8.11,
          "signal": "stable",
          "label": "7 สิงหาคม 2569"
        },
        {
          "date": "2026-08-08",
          "day": 8,
          "price": 7.15,
          "lower": 6.2,
          "upper": 8.1,
          "signal": "stable",
          "label": "8 สิงหาคม 2569"
        },
        {
          "date": "2026-08-09",
          "day": 9,
          "price": 7.15,
          "lower": 6.2,
          "upper": 8.1,
          "signal": "stable",
          "label": "9 สิงหาคม 2569"
        },
        {
          "date": "2026-08-10",
          "day": 10,
          "price": 7.15,
          "lower": 6.2,
          "upper": 8.1,
          "signal": "stable",
          "label": "10 สิงหาคม 2569"
        },
        {
          "date": "2026-08-11",
          "day": 11,
          "price": 7.15,
          "lower": 6.2,
          "upper": 8.1,
          "signal": "stable",
          "label": "11 สิงหาคม 2569"
        },
        {
          "date": "2026-08-12",
          "day": 12,
          "price": 7.14,
          "lower": 6.18,
          "upper": 8.1,
          "signal": "stable",
          "label": "12 สิงหาคม 2569"
        },
        {
          "date": "2026-08-13",
          "day": 13,
          "price": 7.14,
          "lower": 6.18,
          "upper": 8.1,
          "signal": "stable",
          "label": "13 สิงหาคม 2569"
        },
        {
          "date": "2026-08-14",
          "day": 14,
          "price": 7.13,
          "lower": 6.17,
          "upper": 8.09,
          "signal": "stable",
          "label": "14 สิงหาคม 2569"
        },
        {
          "date": "2026-08-15",
          "day": 15,
          "price": 7.13,
          "lower": 6.17,
          "upper": 8.09,
          "signal": "stable",
          "label": "15 สิงหาคม 2569"
        },
        {
          "date": "2026-08-16",
          "day": 16,
          "price": 7.13,
          "lower": 6.17,
          "upper": 8.09,
          "signal": "stable",
          "label": "16 สิงหาคม 2569"
        },
        {
          "date": "2026-08-17",
          "day": 17,
          "price": 7.13,
          "lower": 6.16,
          "upper": 8.1,
          "signal": "stable",
          "label": "17 สิงหาคม 2569"
        },
        {
          "date": "2026-08-18",
          "day": 18,
          "price": 7.13,
          "lower": 6.16,
          "upper": 8.1,
          "signal": "stable",
          "label": "18 สิงหาคม 2569"
        },
        {
          "date": "2026-08-19",
          "day": 19,
          "price": 7.13,
          "lower": 6.16,
          "upper": 8.1,
          "signal": "stable",
          "label": "19 สิงหาคม 2569"
        },
        {
          "date": "2026-08-20",
          "day": 20,
          "price": 7.13,
          "lower": 6.16,
          "upper": 8.1,
          "signal": "stable",
          "label": "20 สิงหาคม 2569"
        },
        {
          "date": "2026-08-21",
          "day": 21,
          "price": 7.13,
          "lower": 6.16,
          "upper": 8.1,
          "signal": "stable",
          "label": "21 สิงหาคม 2569"
        },
        {
          "date": "2026-08-22",
          "day": 22,
          "price": 7.13,
          "lower": 6.15,
          "upper": 8.11,
          "signal": "stable",
          "label": "22 สิงหาคม 2569"
        },
        {
          "date": "2026-08-23",
          "day": 23,
          "price": 7.13,
          "lower": 6.15,
          "upper": 8.11,
          "signal": "stable",
          "label": "23 สิงหาคม 2569"
        },
        {
          "date": "2026-08-24",
          "day": 24,
          "price": 7.14,
          "lower": 6.16,
          "upper": 8.12,
          "signal": "stable",
          "label": "24 สิงหาคม 2569"
        },
        {
          "date": "2026-08-25",
          "day": 25,
          "price": 7.14,
          "lower": 6.16,
          "upper": 8.12,
          "signal": "stable",
          "label": "25 สิงหาคม 2569"
        },
        {
          "date": "2026-08-26",
          "day": 26,
          "price": 7.14,
          "lower": 6.16,
          "upper": 8.12,
          "signal": "stable",
          "label": "26 สิงหาคม 2569"
        },
        {
          "date": "2026-08-27",
          "day": 27,
          "price": 7.15,
          "lower": 6.16,
          "upper": 8.14,
          "signal": "stable",
          "label": "27 สิงหาคม 2569"
        },
        {
          "date": "2026-08-28",
          "day": 28,
          "price": 7.15,
          "lower": 6.16,
          "upper": 8.14,
          "signal": "stable",
          "label": "28 สิงหาคม 2569"
        },
        {
          "date": "2026-08-29",
          "day": 29,
          "price": 7.15,
          "lower": 6.16,
          "upper": 8.14,
          "signal": "stable",
          "label": "29 สิงหาคม 2569"
        },
        {
          "date": "2026-08-30",
          "day": 30,
          "price": 7.11,
          "lower": 6.12,
          "upper": 8.1,
          "signal": "stable",
          "label": "30 สิงหาคม 2569"
        },
        {
          "date": "2026-08-31",
          "day": 31,
          "price": 7.08,
          "lower": 6.09,
          "upper": 8.07,
          "signal": "stable",
          "label": "31 สิงหาคม 2569"
        }
      ],
      "average": 7.14,
      "min": 7.08,
      "max": 7.18
    },
    {
      "key": "2026-09",
      "month": 9,
      "year": 2026,
      "beYear": 2569,
      "title": "กันยายน 2569",
      "days": [
        {
          "date": "2026-09-01",
          "day": 1,
          "price": 7.04,
          "lower": 6.04,
          "upper": 8.04,
          "signal": "stable",
          "label": "1 กันยายน 2569"
        },
        {
          "date": "2026-09-02",
          "day": 2,
          "price": 7.01,
          "lower": 6.01,
          "upper": 8.01,
          "signal": "stable",
          "label": "2 กันยายน 2569"
        },
        {
          "date": "2026-09-03",
          "day": 3,
          "price": 6.97,
          "lower": 5.97,
          "upper": 7.97,
          "signal": "stable",
          "label": "3 กันยายน 2569"
        },
        {
          "date": "2026-09-04",
          "day": 4,
          "price": 6.97,
          "lower": 5.97,
          "upper": 7.97,
          "signal": "stable",
          "label": "4 กันยายน 2569"
        },
        {
          "date": "2026-09-05",
          "day": 5,
          "price": 6.98,
          "lower": 5.98,
          "upper": 7.98,
          "signal": "stable",
          "label": "5 กันยายน 2569"
        },
        {
          "date": "2026-09-06",
          "day": 6,
          "price": 6.99,
          "lower": 5.98,
          "upper": 8,
          "signal": "stable",
          "label": "6 กันยายน 2569"
        },
        {
          "date": "2026-09-07",
          "day": 7,
          "price": 7,
          "lower": 5.99,
          "upper": 8.01,
          "signal": "stable",
          "label": "7 กันยายน 2569"
        },
        {
          "date": "2026-09-08",
          "day": 8,
          "price": 7.01,
          "lower": 6,
          "upper": 8.02,
          "signal": "stable",
          "label": "8 กันยายน 2569"
        },
        {
          "date": "2026-09-09",
          "day": 9,
          "price": 7.02,
          "lower": 6.01,
          "upper": 8.03,
          "signal": "stable",
          "label": "9 กันยายน 2569"
        },
        {
          "date": "2026-09-10",
          "day": 10,
          "price": 7.03,
          "lower": 6.02,
          "upper": 8.04,
          "signal": "stable",
          "label": "10 กันยายน 2569"
        },
        {
          "date": "2026-09-11",
          "day": 11,
          "price": 7.04,
          "lower": 6.02,
          "upper": 8.06,
          "signal": "stable",
          "label": "11 กันยายน 2569"
        },
        {
          "date": "2026-09-12",
          "day": 12,
          "price": 7.05,
          "lower": 6.03,
          "upper": 8.07,
          "signal": "stable",
          "label": "12 กันยายน 2569"
        },
        {
          "date": "2026-09-13",
          "day": 13,
          "price": 7.06,
          "lower": 6.04,
          "upper": 8.08,
          "signal": "stable",
          "label": "13 กันยายน 2569"
        },
        {
          "date": "2026-09-14",
          "day": 14,
          "price": 7.08,
          "lower": 6.06,
          "upper": 8.1,
          "signal": "stable",
          "label": "14 กันยายน 2569"
        },
        {
          "date": "2026-09-15",
          "day": 15,
          "price": 7.09,
          "lower": 6.07,
          "upper": 8.11,
          "signal": "stable",
          "label": "15 กันยายน 2569"
        },
        {
          "date": "2026-09-16",
          "day": 16,
          "price": 7.11,
          "lower": 6.08,
          "upper": 8.14,
          "signal": "stable",
          "label": "16 กันยายน 2569"
        },
        {
          "date": "2026-09-17",
          "day": 17,
          "price": 7.12,
          "lower": 6.09,
          "upper": 8.15,
          "signal": "stable",
          "label": "17 กันยายน 2569"
        },
        {
          "date": "2026-09-18",
          "day": 18,
          "price": 7.13,
          "lower": 6.1,
          "upper": 8.16,
          "signal": "stable",
          "label": "18 กันยายน 2569"
        },
        {
          "date": "2026-09-19",
          "day": 19,
          "price": 7.14,
          "lower": 6.11,
          "upper": 8.17,
          "signal": "stable",
          "label": "19 กันยายน 2569"
        },
        {
          "date": "2026-09-20",
          "day": 20,
          "price": 7.16,
          "lower": 6.13,
          "upper": 8.19,
          "signal": "stable",
          "label": "20 กันยายน 2569"
        },
        {
          "date": "2026-09-21",
          "day": 21,
          "price": 7.18,
          "lower": 6.14,
          "upper": 8.22,
          "signal": "stable",
          "label": "21 กันยายน 2569"
        },
        {
          "date": "2026-09-22",
          "day": 22,
          "price": 7.2,
          "lower": 6.16,
          "upper": 8.24,
          "signal": "stable",
          "label": "22 กันยายน 2569"
        },
        {
          "date": "2026-09-23",
          "day": 23,
          "price": 7.21,
          "lower": 6.17,
          "upper": 8.25,
          "signal": "stable",
          "label": "23 กันยายน 2569"
        },
        {
          "date": "2026-09-24",
          "day": 24,
          "price": 7.22,
          "lower": 6.18,
          "upper": 8.26,
          "signal": "stable",
          "label": "24 กันยายน 2569"
        },
        {
          "date": "2026-09-25",
          "day": 25,
          "price": 7.24,
          "lower": 6.2,
          "upper": 8.28,
          "signal": "stable",
          "label": "25 กันยายน 2569"
        },
        {
          "date": "2026-09-26",
          "day": 26,
          "price": 7.26,
          "lower": 6.21,
          "upper": 8.31,
          "signal": "stable",
          "label": "26 กันยายน 2569"
        },
        {
          "date": "2026-09-27",
          "day": 27,
          "price": 7.27,
          "lower": 6.22,
          "upper": 8.32,
          "signal": "stable",
          "label": "27 กันยายน 2569"
        },
        {
          "date": "2026-09-28",
          "day": 28,
          "price": 7.29,
          "lower": 6.24,
          "upper": 8.34,
          "signal": "stable",
          "label": "28 กันยายน 2569"
        },
        {
          "date": "2026-09-29",
          "day": 29,
          "price": 7.33,
          "lower": 6.28,
          "upper": 8.38,
          "signal": "stable",
          "label": "29 กันยายน 2569"
        },
        {
          "date": "2026-09-30",
          "day": 30,
          "price": 7.37,
          "lower": 6.32,
          "upper": 8.42,
          "signal": "stable",
          "label": "30 กันยายน 2569"
        }
      ],
      "average": 7.12,
      "min": 6.97,
      "max": 7.37
    },
    {
      "key": "2026-10",
      "month": 10,
      "year": 2026,
      "beYear": 2569,
      "title": "ตุลาคม 2569",
      "days": [
        {
          "date": "2026-10-01",
          "day": 1,
          "price": 7.4,
          "lower": 6.34,
          "upper": 8.46,
          "signal": "low",
          "label": "1 ตุลาคม 2569"
        },
        {
          "date": "2026-10-02",
          "day": 2,
          "price": 7.43,
          "lower": 6.37,
          "upper": 8.49,
          "signal": "stable",
          "label": "2 ตุลาคม 2569"
        },
        {
          "date": "2026-10-03",
          "day": 3,
          "price": 7.47,
          "lower": 6.41,
          "upper": 8.53,
          "signal": "stable",
          "label": "3 ตุลาคม 2569"
        },
        {
          "date": "2026-10-04",
          "day": 4,
          "price": 7.49,
          "lower": 6.43,
          "upper": 8.55,
          "signal": "stable",
          "label": "4 ตุลาคม 2569"
        },
        {
          "date": "2026-10-05",
          "day": 5,
          "price": 7.51,
          "lower": 6.45,
          "upper": 8.57,
          "signal": "stable",
          "label": "5 ตุลาคม 2569"
        },
        {
          "date": "2026-10-06",
          "day": 6,
          "price": 7.53,
          "lower": 6.46,
          "upper": 8.6,
          "signal": "stable",
          "label": "6 ตุลาคม 2569"
        },
        {
          "date": "2026-10-07",
          "day": 7,
          "price": 7.55,
          "lower": 6.48,
          "upper": 8.62,
          "signal": "stable",
          "label": "7 ตุลาคม 2569"
        },
        {
          "date": "2026-10-08",
          "day": 8,
          "price": 7.56,
          "lower": 6.49,
          "upper": 8.63,
          "signal": "stable",
          "label": "8 ตุลาคม 2569"
        },
        {
          "date": "2026-10-09",
          "day": 9,
          "price": 7.58,
          "lower": 6.51,
          "upper": 8.65,
          "signal": "stable",
          "label": "9 ตุลาคม 2569"
        },
        {
          "date": "2026-10-10",
          "day": 10,
          "price": 7.6,
          "lower": 6.53,
          "upper": 8.67,
          "signal": "stable",
          "label": "10 ตุลาคม 2569"
        },
        {
          "date": "2026-10-11",
          "day": 11,
          "price": 7.62,
          "lower": 6.54,
          "upper": 8.7,
          "signal": "stable",
          "label": "11 ตุลาคม 2569"
        },
        {
          "date": "2026-10-12",
          "day": 12,
          "price": 7.64,
          "lower": 6.56,
          "upper": 8.72,
          "signal": "stable",
          "label": "12 ตุลาคม 2569"
        },
        {
          "date": "2026-10-13",
          "day": 13,
          "price": 7.66,
          "lower": 6.58,
          "upper": 8.74,
          "signal": "stable",
          "label": "13 ตุลาคม 2569"
        },
        {
          "date": "2026-10-14",
          "day": 14,
          "price": 7.68,
          "lower": 6.6,
          "upper": 8.76,
          "signal": "stable",
          "label": "14 ตุลาคม 2569"
        },
        {
          "date": "2026-10-15",
          "day": 15,
          "price": 7.7,
          "lower": 6.62,
          "upper": 8.78,
          "signal": "stable",
          "label": "15 ตุลาคม 2569"
        },
        {
          "date": "2026-10-16",
          "day": 16,
          "price": 7.71,
          "lower": 6.62,
          "upper": 8.8,
          "signal": "stable",
          "label": "16 ตุลาคม 2569"
        },
        {
          "date": "2026-10-17",
          "day": 17,
          "price": 7.73,
          "lower": 6.64,
          "upper": 8.82,
          "signal": "stable",
          "label": "17 ตุลาคม 2569"
        },
        {
          "date": "2026-10-18",
          "day": 18,
          "price": 7.75,
          "lower": 6.66,
          "upper": 8.84,
          "signal": "stable",
          "label": "18 ตุลาคม 2569"
        },
        {
          "date": "2026-10-19",
          "day": 19,
          "price": 7.77,
          "lower": 6.68,
          "upper": 8.86,
          "signal": "stable",
          "label": "19 ตุลาคม 2569"
        },
        {
          "date": "2026-10-20",
          "day": 20,
          "price": 7.79,
          "lower": 6.7,
          "upper": 8.88,
          "signal": "stable",
          "label": "20 ตุลาคม 2569"
        },
        {
          "date": "2026-10-21",
          "day": 21,
          "price": 7.81,
          "lower": 6.71,
          "upper": 8.91,
          "signal": "stable",
          "label": "21 ตุลาคม 2569"
        },
        {
          "date": "2026-10-22",
          "day": 22,
          "price": 7.83,
          "lower": 6.73,
          "upper": 8.93,
          "signal": "stable",
          "label": "22 ตุลาคม 2569"
        },
        {
          "date": "2026-10-23",
          "day": 23,
          "price": 7.84,
          "lower": 6.74,
          "upper": 8.94,
          "signal": "stable",
          "label": "23 ตุลาคม 2569"
        },
        {
          "date": "2026-10-24",
          "day": 24,
          "price": 7.86,
          "lower": 6.76,
          "upper": 8.96,
          "signal": "stable",
          "label": "24 ตุลาคม 2569"
        },
        {
          "date": "2026-10-25",
          "day": 25,
          "price": 7.88,
          "lower": 6.78,
          "upper": 8.98,
          "signal": "stable",
          "label": "25 ตุลาคม 2569"
        },
        {
          "date": "2026-10-26",
          "day": 26,
          "price": 7.9,
          "lower": 6.79,
          "upper": 9.01,
          "signal": "stable",
          "label": "26 ตุลาคม 2569"
        },
        {
          "date": "2026-10-27",
          "day": 27,
          "price": 7.91,
          "lower": 6.8,
          "upper": 9.02,
          "signal": "stable",
          "label": "27 ตุลาคม 2569"
        },
        {
          "date": "2026-10-28",
          "day": 28,
          "price": 7.93,
          "lower": 6.82,
          "upper": 9.04,
          "signal": "stable",
          "label": "28 ตุลาคม 2569"
        },
        {
          "date": "2026-10-29",
          "day": 29,
          "price": 7.95,
          "lower": 6.84,
          "upper": 9.06,
          "signal": "stable",
          "label": "29 ตุลาคม 2569"
        },
        {
          "date": "2026-10-30",
          "day": 30,
          "price": 7.97,
          "lower": 6.86,
          "upper": 9.08,
          "signal": "stable",
          "label": "30 ตุลาคม 2569"
        },
        {
          "date": "2026-10-31",
          "day": 31,
          "price": 8,
          "lower": 6.88,
          "upper": 9.12,
          "signal": "stable",
          "label": "31 ตุลาคม 2569"
        }
      ],
      "average": 7.71,
      "min": 7.4,
      "max": 8
    },
    {
      "key": "2026-11",
      "month": 11,
      "year": 2026,
      "beYear": 2569,
      "title": "พฤศจิกายน 2569",
      "days": [
        {
          "date": "2026-11-01",
          "day": 1,
          "price": 8.02,
          "lower": 6.9,
          "upper": 9.14,
          "signal": "stable",
          "label": "1 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-02",
          "day": 2,
          "price": 8.05,
          "lower": 6.93,
          "upper": 9.17,
          "signal": "stable",
          "label": "2 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-03",
          "day": 3,
          "price": 8.08,
          "lower": 6.96,
          "upper": 9.2,
          "signal": "stable",
          "label": "3 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-04",
          "day": 4,
          "price": 8.09,
          "lower": 6.97,
          "upper": 9.21,
          "signal": "stable",
          "label": "4 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-05",
          "day": 5,
          "price": 8.1,
          "lower": 6.97,
          "upper": 9.23,
          "signal": "stable",
          "label": "5 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-06",
          "day": 6,
          "price": 8.12,
          "lower": 6.99,
          "upper": 9.25,
          "signal": "stable",
          "label": "6 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-07",
          "day": 7,
          "price": 8.13,
          "lower": 7,
          "upper": 9.26,
          "signal": "stable",
          "label": "7 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-08",
          "day": 8,
          "price": 8.14,
          "lower": 7.01,
          "upper": 9.27,
          "signal": "stable",
          "label": "8 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-09",
          "day": 9,
          "price": 8.16,
          "lower": 7.03,
          "upper": 9.29,
          "signal": "stable",
          "label": "9 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-10",
          "day": 10,
          "price": 8.17,
          "lower": 7.03,
          "upper": 9.31,
          "signal": "stable",
          "label": "10 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-11",
          "day": 11,
          "price": 8.19,
          "lower": 7.05,
          "upper": 9.33,
          "signal": "stable",
          "label": "11 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-12",
          "day": 12,
          "price": 8.2,
          "lower": 7.06,
          "upper": 9.34,
          "signal": "stable",
          "label": "12 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-13",
          "day": 13,
          "price": 8.21,
          "lower": 7.07,
          "upper": 9.35,
          "signal": "stable",
          "label": "13 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-14",
          "day": 14,
          "price": 8.22,
          "lower": 7.08,
          "upper": 9.36,
          "signal": "stable",
          "label": "14 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-15",
          "day": 15,
          "price": 8.23,
          "lower": 7.08,
          "upper": 9.38,
          "signal": "stable",
          "label": "15 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-16",
          "day": 16,
          "price": 8.24,
          "lower": 7.09,
          "upper": 9.39,
          "signal": "stable",
          "label": "16 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-17",
          "day": 17,
          "price": 8.25,
          "lower": 7.1,
          "upper": 9.4,
          "signal": "stable",
          "label": "17 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-18",
          "day": 18,
          "price": 8.26,
          "lower": 7.11,
          "upper": 9.41,
          "signal": "stable",
          "label": "18 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-19",
          "day": 19,
          "price": 8.27,
          "lower": 7.12,
          "upper": 9.42,
          "signal": "stable",
          "label": "19 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-20",
          "day": 20,
          "price": 8.28,
          "lower": 7.12,
          "upper": 9.44,
          "signal": "stable",
          "label": "20 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-21",
          "day": 21,
          "price": 8.29,
          "lower": 7.13,
          "upper": 9.45,
          "signal": "stable",
          "label": "21 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-22",
          "day": 22,
          "price": 8.3,
          "lower": 7.14,
          "upper": 9.46,
          "signal": "stable",
          "label": "22 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-23",
          "day": 23,
          "price": 8.31,
          "lower": 7.15,
          "upper": 9.47,
          "signal": "stable",
          "label": "23 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-24",
          "day": 24,
          "price": 8.32,
          "lower": 7.16,
          "upper": 9.48,
          "signal": "stable",
          "label": "24 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-25",
          "day": 25,
          "price": 8.33,
          "lower": 7.16,
          "upper": 9.5,
          "signal": "stable",
          "label": "25 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-26",
          "day": 26,
          "price": 8.33,
          "lower": 7.16,
          "upper": 9.5,
          "signal": "stable",
          "label": "26 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-27",
          "day": 27,
          "price": 8.34,
          "lower": 7.17,
          "upper": 9.51,
          "signal": "stable",
          "label": "27 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-28",
          "day": 28,
          "price": 8.35,
          "lower": 7.18,
          "upper": 9.52,
          "signal": "stable",
          "label": "28 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-29",
          "day": 29,
          "price": 8.29,
          "lower": 7.12,
          "upper": 9.46,
          "signal": "stable",
          "label": "29 พฤศจิกายน 2569"
        },
        {
          "date": "2026-11-30",
          "day": 30,
          "price": 8.23,
          "lower": 7.05,
          "upper": 9.41,
          "signal": "stable",
          "label": "30 พฤศจิกายน 2569"
        }
      ],
      "average": 8.22,
      "min": 8.02,
      "max": 8.35
    },
    {
      "key": "2026-12",
      "month": 12,
      "year": 2026,
      "beYear": 2569,
      "title": "ธันวาคม 2569",
      "days": [
        {
          "date": "2026-12-01",
          "day": 1,
          "price": 8.17,
          "lower": 6.99,
          "upper": 9.35,
          "signal": "stable",
          "label": "1 ธันวาคม 2569"
        },
        {
          "date": "2026-12-02",
          "day": 2,
          "price": 8.11,
          "lower": 6.93,
          "upper": 9.29,
          "signal": "stable",
          "label": "2 ธันวาคม 2569"
        },
        {
          "date": "2026-12-03",
          "day": 3,
          "price": 8.04,
          "lower": 6.86,
          "upper": 9.22,
          "signal": "stable",
          "label": "3 ธันวาคม 2569"
        },
        {
          "date": "2026-12-04",
          "day": 4,
          "price": 8.05,
          "lower": 6.87,
          "upper": 9.23,
          "signal": "stable",
          "label": "4 ธันวาคม 2569"
        },
        {
          "date": "2026-12-05",
          "day": 5,
          "price": 8.05,
          "lower": 6.86,
          "upper": 9.24,
          "signal": "stable",
          "label": "5 ธันวาคม 2569"
        },
        {
          "date": "2026-12-06",
          "day": 6,
          "price": 8.06,
          "lower": 6.87,
          "upper": 9.25,
          "signal": "stable",
          "label": "6 ธันวาคม 2569"
        },
        {
          "date": "2026-12-07",
          "day": 7,
          "price": 8.07,
          "lower": 6.88,
          "upper": 9.26,
          "signal": "stable",
          "label": "7 ธันวาคม 2569"
        },
        {
          "date": "2026-12-08",
          "day": 8,
          "price": 8.08,
          "lower": 6.89,
          "upper": 9.27,
          "signal": "stable",
          "label": "8 ธันวาคม 2569"
        },
        {
          "date": "2026-12-09",
          "day": 9,
          "price": 8.08,
          "lower": 6.89,
          "upper": 9.27,
          "signal": "stable",
          "label": "9 ธันวาคม 2569"
        },
        {
          "date": "2026-12-10",
          "day": 10,
          "price": 8.09,
          "lower": 6.89,
          "upper": 9.29,
          "signal": "stable",
          "label": "10 ธันวาคม 2569"
        },
        {
          "date": "2026-12-11",
          "day": 11,
          "price": 8.09,
          "lower": 6.89,
          "upper": 9.29,
          "signal": "stable",
          "label": "11 ธันวาคม 2569"
        },
        {
          "date": "2026-12-12",
          "day": 12,
          "price": 8.1,
          "lower": 6.9,
          "upper": 9.3,
          "signal": "stable",
          "label": "12 ธันวาคม 2569"
        },
        {
          "date": "2026-12-13",
          "day": 13,
          "price": 8.11,
          "lower": 6.91,
          "upper": 9.31,
          "signal": "stable",
          "label": "13 ธันวาคม 2569"
        },
        {
          "date": "2026-12-14",
          "day": 14,
          "price": 8.12,
          "lower": 6.92,
          "upper": 9.32,
          "signal": "stable",
          "label": "14 ธันวาคม 2569"
        },
        {
          "date": "2026-12-15",
          "day": 15,
          "price": 8.12,
          "lower": 6.91,
          "upper": 9.33,
          "signal": "stable",
          "label": "15 ธันวาคม 2569"
        },
        {
          "date": "2026-12-16",
          "day": 16,
          "price": 8.13,
          "lower": 6.92,
          "upper": 9.34,
          "signal": "stable",
          "label": "16 ธันวาคม 2569"
        },
        {
          "date": "2026-12-17",
          "day": 17,
          "price": 8.13,
          "lower": 6.92,
          "upper": 9.34,
          "signal": "stable",
          "label": "17 ธันวาคม 2569"
        },
        {
          "date": "2026-12-18",
          "day": 18,
          "price": 8.14,
          "lower": 6.93,
          "upper": 9.35,
          "signal": "stable",
          "label": "18 ธันวาคม 2569"
        },
        {
          "date": "2026-12-19",
          "day": 19,
          "price": 8.14,
          "lower": 6.93,
          "upper": 9.35,
          "signal": "stable",
          "label": "19 ธันวาคม 2569"
        },
        {
          "date": "2026-12-20",
          "day": 20,
          "price": 8.15,
          "lower": 6.93,
          "upper": 9.37,
          "signal": "stable",
          "label": "20 ธันวาคม 2569"
        },
        {
          "date": "2026-12-21",
          "day": 21,
          "price": 8.16,
          "lower": 6.94,
          "upper": 9.38,
          "signal": "stable",
          "label": "21 ธันวาคม 2569"
        },
        {
          "date": "2026-12-22",
          "day": 22,
          "price": 8.17,
          "lower": 6.95,
          "upper": 9.39,
          "signal": "stable",
          "label": "22 ธันวาคม 2569"
        },
        {
          "date": "2026-12-23",
          "day": 23,
          "price": 8.17,
          "lower": 6.95,
          "upper": 9.39,
          "signal": "stable",
          "label": "23 ธันวาคม 2569"
        },
        {
          "date": "2026-12-24",
          "day": 24,
          "price": 8.18,
          "lower": 6.96,
          "upper": 9.4,
          "signal": "stable",
          "label": "24 ธันวาคม 2569"
        },
        {
          "date": "2026-12-25",
          "day": 25,
          "price": 8.18,
          "lower": 6.95,
          "upper": 9.41,
          "signal": "stable",
          "label": "25 ธันวาคม 2569"
        },
        {
          "date": "2026-12-26",
          "day": 26,
          "price": 8.19,
          "lower": 6.96,
          "upper": 9.42,
          "signal": "stable",
          "label": "26 ธันวาคม 2569"
        },
        {
          "date": "2026-12-27",
          "day": 27,
          "price": 8.19,
          "lower": 6.96,
          "upper": 9.42,
          "signal": "stable",
          "label": "27 ธันวาคม 2569"
        },
        {
          "date": "2026-12-28",
          "day": 28,
          "price": 8.2,
          "lower": 6.97,
          "upper": 9.43,
          "signal": "stable",
          "label": "28 ธันวาคม 2569"
        },
        {
          "date": "2026-12-29",
          "day": 29,
          "price": 8.21,
          "lower": 6.98,
          "upper": 9.44,
          "signal": "stable",
          "label": "29 ธันวาคม 2569"
        },
        {
          "date": "2026-12-30",
          "day": 30,
          "price": 8.27,
          "lower": 7.03,
          "upper": 9.51,
          "signal": "stable",
          "label": "30 ธันวาคม 2569"
        },
        {
          "date": "2026-12-31",
          "day": 31,
          "price": 8.33,
          "lower": 7.09,
          "upper": 9.57,
          "signal": "stable",
          "label": "31 ธันวาคม 2569"
        }
      ],
      "average": 8.14,
      "min": 8.04,
      "max": 8.33
    },
    {
      "key": "2027-01",
      "month": 1,
      "year": 2027,
      "beYear": 2570,
      "title": "มกราคม 2570",
      "days": [
        {
          "date": "2027-01-01",
          "day": 1,
          "price": 8.39,
          "lower": 7.15,
          "upper": 9.63,
          "signal": "stable",
          "label": "1 มกราคม 2570"
        },
        {
          "date": "2027-01-02",
          "day": 2,
          "price": 8.46,
          "lower": 7.22,
          "upper": 9.7,
          "signal": "stable",
          "label": "2 มกราคม 2570"
        },
        {
          "date": "2027-01-03",
          "day": 3,
          "price": 8.52,
          "lower": 7.28,
          "upper": 9.76,
          "signal": "stable",
          "label": "3 มกราคม 2570"
        },
        {
          "date": "2027-01-04",
          "day": 4,
          "price": 8.53,
          "lower": 7.28,
          "upper": 9.78,
          "signal": "stable",
          "label": "4 มกราคม 2570"
        },
        {
          "date": "2027-01-05",
          "day": 5,
          "price": 8.54,
          "lower": 7.29,
          "upper": 9.79,
          "signal": "stable",
          "label": "5 มกราคม 2570"
        },
        {
          "date": "2027-01-06",
          "day": 6,
          "price": 8.54,
          "lower": 7.29,
          "upper": 9.79,
          "signal": "stable",
          "label": "6 มกราคม 2570"
        },
        {
          "date": "2027-01-07",
          "day": 7,
          "price": 8.55,
          "lower": 7.3,
          "upper": 9.8,
          "signal": "stable",
          "label": "7 มกราคม 2570"
        },
        {
          "date": "2027-01-08",
          "day": 8,
          "price": 8.55,
          "lower": 7.3,
          "upper": 9.8,
          "signal": "stable",
          "label": "8 มกราคม 2570"
        },
        {
          "date": "2027-01-09",
          "day": 9,
          "price": 8.56,
          "lower": 7.3,
          "upper": 9.82,
          "signal": "stable",
          "label": "9 มกราคม 2570"
        },
        {
          "date": "2027-01-10",
          "day": 10,
          "price": 8.57,
          "lower": 7.31,
          "upper": 9.83,
          "signal": "stable",
          "label": "10 มกราคม 2570"
        },
        {
          "date": "2027-01-11",
          "day": 11,
          "price": 8.58,
          "lower": 7.32,
          "upper": 9.84,
          "signal": "stable",
          "label": "11 มกราคม 2570"
        },
        {
          "date": "2027-01-12",
          "day": 12,
          "price": 8.58,
          "lower": 7.32,
          "upper": 9.84,
          "signal": "stable",
          "label": "12 มกราคม 2570"
        },
        {
          "date": "2027-01-13",
          "day": 13,
          "price": 8.59,
          "lower": 7.33,
          "upper": 9.85,
          "signal": "stable",
          "label": "13 มกราคม 2570"
        },
        {
          "date": "2027-01-14",
          "day": 14,
          "price": 8.59,
          "lower": 7.32,
          "upper": 9.86,
          "signal": "stable",
          "label": "14 มกราคม 2570"
        },
        {
          "date": "2027-01-15",
          "day": 15,
          "price": 8.6,
          "lower": 7.33,
          "upper": 9.87,
          "signal": "stable",
          "label": "15 มกราคม 2570"
        },
        {
          "date": "2027-01-16",
          "day": 16,
          "price": 8.6,
          "lower": 7.33,
          "upper": 9.87,
          "signal": "stable",
          "label": "16 มกราคม 2570"
        },
        {
          "date": "2027-01-17",
          "day": 17,
          "price": 8.61,
          "lower": 7.34,
          "upper": 9.88,
          "signal": "stable",
          "label": "17 มกราคม 2570"
        },
        {
          "date": "2027-01-18",
          "day": 18,
          "price": 8.62,
          "lower": 7.35,
          "upper": 9.89,
          "signal": "stable",
          "label": "18 มกราคม 2570"
        },
        {
          "date": "2027-01-19",
          "day": 19,
          "price": 8.63,
          "lower": 7.35,
          "upper": 9.91,
          "signal": "stable",
          "label": "19 มกราคม 2570"
        },
        {
          "date": "2027-01-20",
          "day": 20,
          "price": 8.63,
          "lower": 7.35,
          "upper": 9.91,
          "signal": "stable",
          "label": "20 มกราคม 2570"
        },
        {
          "date": "2027-01-21",
          "day": 21,
          "price": 8.64,
          "lower": 7.36,
          "upper": 9.92,
          "signal": "stable",
          "label": "21 มกราคม 2570"
        },
        {
          "date": "2027-01-22",
          "day": 22,
          "price": 8.64,
          "lower": 7.36,
          "upper": 9.92,
          "signal": "stable",
          "label": "22 มกราคม 2570"
        },
        {
          "date": "2027-01-23",
          "day": 23,
          "price": 8.64,
          "lower": 7.36,
          "upper": 9.92,
          "signal": "stable",
          "label": "23 มกราคม 2570"
        },
        {
          "date": "2027-01-24",
          "day": 24,
          "price": 8.65,
          "lower": 7.36,
          "upper": 9.94,
          "signal": "stable",
          "label": "24 มกราคม 2570"
        },
        {
          "date": "2027-01-25",
          "day": 25,
          "price": 8.66,
          "lower": 7.37,
          "upper": 9.95,
          "signal": "stable",
          "label": "25 มกราคม 2570"
        },
        {
          "date": "2027-01-26",
          "day": 26,
          "price": 8.66,
          "lower": 7.37,
          "upper": 9.95,
          "signal": "stable",
          "label": "26 มกราคม 2570"
        },
        {
          "date": "2027-01-27",
          "day": 27,
          "price": 8.67,
          "lower": 7.38,
          "upper": 9.96,
          "signal": "stable",
          "label": "27 มกราคม 2570"
        },
        {
          "date": "2027-01-28",
          "day": 28,
          "price": 8.67,
          "lower": 7.38,
          "upper": 9.96,
          "signal": "stable",
          "label": "28 มกราคม 2570"
        },
        {
          "date": "2027-01-29",
          "day": 29,
          "price": 8.67,
          "lower": 7.37,
          "upper": 9.97,
          "signal": "stable",
          "label": "29 มกราคม 2570"
        },
        {
          "date": "2027-01-30",
          "day": 30,
          "price": 8.58,
          "lower": 7.28,
          "upper": 9.88,
          "signal": "stable",
          "label": "30 มกราคม 2570"
        },
        {
          "date": "2027-01-31",
          "day": 31,
          "price": 8.5,
          "lower": 7.2,
          "upper": 9.8,
          "signal": "stable",
          "label": "31 มกราคม 2570"
        }
      ],
      "average": 8.59,
      "min": 8.39,
      "max": 8.67
    },
    {
      "key": "2027-02",
      "month": 2,
      "year": 2027,
      "beYear": 2570,
      "title": "กุมภาพันธ์ 2570",
      "days": [
        {
          "date": "2027-02-01",
          "day": 1,
          "price": 8.41,
          "lower": 7.11,
          "upper": 9.71,
          "signal": "stable",
          "label": "1 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-02",
          "day": 2,
          "price": 8.33,
          "lower": 7.03,
          "upper": 9.63,
          "signal": "stable",
          "label": "2 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-03",
          "day": 3,
          "price": 8.24,
          "lower": 6.93,
          "upper": 9.55,
          "signal": "stable",
          "label": "3 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-04",
          "day": 4,
          "price": 8.24,
          "lower": 6.93,
          "upper": 9.55,
          "signal": "stable",
          "label": "4 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-05",
          "day": 5,
          "price": 8.24,
          "lower": 6.93,
          "upper": 9.55,
          "signal": "stable",
          "label": "5 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-06",
          "day": 6,
          "price": 8.24,
          "lower": 6.93,
          "upper": 9.55,
          "signal": "stable",
          "label": "6 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-07",
          "day": 7,
          "price": 8.24,
          "lower": 6.93,
          "upper": 9.55,
          "signal": "stable",
          "label": "7 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-08",
          "day": 8,
          "price": 8.24,
          "lower": 6.92,
          "upper": 9.56,
          "signal": "stable",
          "label": "8 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-09",
          "day": 9,
          "price": 8.24,
          "lower": 6.92,
          "upper": 9.56,
          "signal": "stable",
          "label": "9 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-10",
          "day": 10,
          "price": 8.24,
          "lower": 6.92,
          "upper": 9.56,
          "signal": "stable",
          "label": "10 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-11",
          "day": 11,
          "price": 8.23,
          "lower": 6.91,
          "upper": 9.55,
          "signal": "stable",
          "label": "11 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-12",
          "day": 12,
          "price": 8.23,
          "lower": 6.91,
          "upper": 9.55,
          "signal": "stable",
          "label": "12 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-13",
          "day": 13,
          "price": 8.23,
          "lower": 6.9,
          "upper": 9.56,
          "signal": "stable",
          "label": "13 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-14",
          "day": 14,
          "price": 8.22,
          "lower": 6.89,
          "upper": 9.55,
          "signal": "stable",
          "label": "14 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-15",
          "day": 15,
          "price": 8.22,
          "lower": 6.89,
          "upper": 9.55,
          "signal": "stable",
          "label": "15 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-16",
          "day": 16,
          "price": 8.22,
          "lower": 6.89,
          "upper": 9.55,
          "signal": "stable",
          "label": "16 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-17",
          "day": 17,
          "price": 8.22,
          "lower": 6.89,
          "upper": 9.55,
          "signal": "stable",
          "label": "17 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-18",
          "day": 18,
          "price": 8.21,
          "lower": 6.87,
          "upper": 9.55,
          "signal": "stable",
          "label": "18 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-19",
          "day": 19,
          "price": 8.2,
          "lower": 6.86,
          "upper": 9.54,
          "signal": "stable",
          "label": "19 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-20",
          "day": 20,
          "price": 8.19,
          "lower": 6.85,
          "upper": 9.53,
          "signal": "stable",
          "label": "20 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-21",
          "day": 21,
          "price": 8.19,
          "lower": 6.85,
          "upper": 9.53,
          "signal": "stable",
          "label": "21 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-22",
          "day": 22,
          "price": 8.18,
          "lower": 6.84,
          "upper": 9.52,
          "signal": "stable",
          "label": "22 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-23",
          "day": 23,
          "price": 8.17,
          "lower": 6.82,
          "upper": 9.52,
          "signal": "stable",
          "label": "23 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-24",
          "day": 24,
          "price": 8.16,
          "lower": 6.81,
          "upper": 9.51,
          "signal": "stable",
          "label": "24 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-25",
          "day": 25,
          "price": 8.15,
          "lower": 6.8,
          "upper": 9.5,
          "signal": "stable",
          "label": "25 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-26",
          "day": 26,
          "price": 8.14,
          "lower": 6.79,
          "upper": 9.49,
          "signal": "stable",
          "label": "26 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-27",
          "day": 27,
          "price": 8.08,
          "lower": 6.73,
          "upper": 9.43,
          "signal": "stable",
          "label": "27 กุมภาพันธ์ 2570"
        },
        {
          "date": "2027-02-28",
          "day": 28,
          "price": 8.02,
          "lower": 6.66,
          "upper": 9.38,
          "signal": "stable",
          "label": "28 กุมภาพันธ์ 2570"
        }
      ],
      "average": 8.21,
      "min": 8.02,
      "max": 8.41
    },
    {
      "key": "2027-03",
      "month": 3,
      "year": 2027,
      "beYear": 2570,
      "title": "มีนาคม 2570",
      "days": [
        {
          "date": "2027-03-01",
          "day": 1,
          "price": 7.97,
          "lower": 6.61,
          "upper": 9.33,
          "signal": "high",
          "label": "1 มีนาคม 2570"
        },
        {
          "date": "2027-03-02",
          "day": 2,
          "price": 7.91,
          "lower": 6.55,
          "upper": 9.27,
          "signal": "stable",
          "label": "2 มีนาคม 2570"
        },
        {
          "date": "2027-03-03",
          "day": 3,
          "price": 7.85,
          "lower": 6.49,
          "upper": 9.21,
          "signal": "stable",
          "label": "3 มีนาคม 2570"
        },
        {
          "date": "2027-03-04",
          "day": 4,
          "price": 7.83,
          "lower": 6.47,
          "upper": 9.19,
          "signal": "stable",
          "label": "4 มีนาคม 2570"
        },
        {
          "date": "2027-03-05",
          "day": 5,
          "price": 7.81,
          "lower": 6.44,
          "upper": 9.18,
          "signal": "stable",
          "label": "5 มีนาคม 2570"
        },
        {
          "date": "2027-03-06",
          "day": 6,
          "price": 7.8,
          "lower": 6.43,
          "upper": 9.17,
          "signal": "stable",
          "label": "6 มีนาคม 2570"
        },
        {
          "date": "2027-03-07",
          "day": 7,
          "price": 7.78,
          "lower": 6.41,
          "upper": 9.15,
          "signal": "stable",
          "label": "7 มีนาคม 2570"
        },
        {
          "date": "2027-03-08",
          "day": 8,
          "price": 7.77,
          "lower": 6.4,
          "upper": 9.14,
          "signal": "stable",
          "label": "8 มีนาคม 2570"
        },
        {
          "date": "2027-03-09",
          "day": 9,
          "price": 7.76,
          "lower": 6.39,
          "upper": 9.13,
          "signal": "stable",
          "label": "9 มีนาคม 2570"
        },
        {
          "date": "2027-03-10",
          "day": 10,
          "price": 7.74,
          "lower": 6.36,
          "upper": 9.12,
          "signal": "stable",
          "label": "10 มีนาคม 2570"
        },
        {
          "date": "2027-03-11",
          "day": 11,
          "price": 7.72,
          "lower": 6.34,
          "upper": 9.1,
          "signal": "stable",
          "label": "11 มีนาคม 2570"
        },
        {
          "date": "2027-03-12",
          "day": 12,
          "price": 7.7,
          "lower": 6.32,
          "upper": 9.08,
          "signal": "stable",
          "label": "12 มีนาคม 2570"
        },
        {
          "date": "2027-03-13",
          "day": 13,
          "price": 7.68,
          "lower": 6.3,
          "upper": 9.06,
          "signal": "stable",
          "label": "13 มีนาคม 2570"
        },
        {
          "date": "2027-03-14",
          "day": 14,
          "price": 7.66,
          "lower": 6.28,
          "upper": 9.04,
          "signal": "stable",
          "label": "14 มีนาคม 2570"
        },
        {
          "date": "2027-03-15",
          "day": 15,
          "price": 7.65,
          "lower": 6.26,
          "upper": 9.04,
          "signal": "stable",
          "label": "15 มีนาคม 2570"
        },
        {
          "date": "2027-03-16",
          "day": 16,
          "price": 7.63,
          "lower": 6.24,
          "upper": 9.02,
          "signal": "stable",
          "label": "16 มีนาคม 2570"
        },
        {
          "date": "2027-03-17",
          "day": 17,
          "price": 7.61,
          "lower": 6.22,
          "upper": 9,
          "signal": "stable",
          "label": "17 มีนาคม 2570"
        },
        {
          "date": "2027-03-18",
          "day": 18,
          "price": 7.59,
          "lower": 6.2,
          "upper": 8.98,
          "signal": "stable",
          "label": "18 มีนาคม 2570"
        },
        {
          "date": "2027-03-19",
          "day": 19,
          "price": 7.56,
          "lower": 6.17,
          "upper": 8.95,
          "signal": "stable",
          "label": "19 มีนาคม 2570"
        },
        {
          "date": "2027-03-20",
          "day": 20,
          "price": 7.54,
          "lower": 6.14,
          "upper": 8.94,
          "signal": "stable",
          "label": "20 มีนาคม 2570"
        },
        {
          "date": "2027-03-21",
          "day": 21,
          "price": 7.52,
          "lower": 6.12,
          "upper": 8.92,
          "signal": "stable",
          "label": "21 มีนาคม 2570"
        },
        {
          "date": "2027-03-22",
          "day": 22,
          "price": 7.5,
          "lower": 6.1,
          "upper": 8.9,
          "signal": "stable",
          "label": "22 มีนาคม 2570"
        },
        {
          "date": "2027-03-23",
          "day": 23,
          "price": 7.48,
          "lower": 6.08,
          "upper": 8.88,
          "signal": "stable",
          "label": "23 มีนาคม 2570"
        },
        {
          "date": "2027-03-24",
          "day": 24,
          "price": 7.46,
          "lower": 6.06,
          "upper": 8.86,
          "signal": "stable",
          "label": "24 มีนาคม 2570"
        },
        {
          "date": "2027-03-25",
          "day": 25,
          "price": 7.44,
          "lower": 6.03,
          "upper": 8.85,
          "signal": "stable",
          "label": "25 มีนาคม 2570"
        },
        {
          "date": "2027-03-26",
          "day": 26,
          "price": 7.41,
          "lower": 6,
          "upper": 8.82,
          "signal": "stable",
          "label": "26 มีนาคม 2570"
        },
        {
          "date": "2027-03-27",
          "day": 27,
          "price": 7.39,
          "lower": 5.98,
          "upper": 8.8,
          "signal": "stable",
          "label": "27 มีนาคม 2570"
        },
        {
          "date": "2027-03-28",
          "day": 28,
          "price": 7.37,
          "lower": 5.96,
          "upper": 8.78,
          "signal": "stable",
          "label": "28 มีนาคม 2570"
        },
        {
          "date": "2027-03-29",
          "day": 29,
          "price": 7.35,
          "lower": 5.94,
          "upper": 8.76,
          "signal": "stable",
          "label": "29 มีนาคม 2570"
        },
        {
          "date": "2027-03-30",
          "day": 30,
          "price": 7.37,
          "lower": 5.95,
          "upper": 8.79,
          "signal": "stable",
          "label": "30 มีนาคม 2570"
        },
        {
          "date": "2027-03-31",
          "day": 31,
          "price": 7.39,
          "lower": 5.97,
          "upper": 8.81,
          "signal": "stable",
          "label": "31 มีนาคม 2570"
        }
      ],
      "average": 7.62,
      "min": 7.35,
      "max": 7.97
    },
    {
      "key": "2027-04",
      "month": 4,
      "year": 2027,
      "beYear": 2570,
      "title": "เมษายน 2570",
      "days": [
        {
          "date": "2027-04-01",
          "day": 1,
          "price": 7.41,
          "lower": 5.99,
          "upper": 8.83,
          "signal": "stable",
          "label": "1 เมษายน 2570"
        },
        {
          "date": "2027-04-02",
          "day": 2,
          "price": 7.43,
          "lower": 6.01,
          "upper": 8.85,
          "signal": "stable",
          "label": "2 เมษายน 2570"
        },
        {
          "date": "2027-04-03",
          "day": 3,
          "price": 7.46,
          "lower": 6.04,
          "upper": 8.88,
          "signal": "stable",
          "label": "3 เมษายน 2570"
        },
        {
          "date": "2027-04-04",
          "day": 4,
          "price": 7.43,
          "lower": 6,
          "upper": 8.86,
          "signal": "stable",
          "label": "4 เมษายน 2570"
        },
        {
          "date": "2027-04-05",
          "day": 5,
          "price": 7.41,
          "lower": 5.98,
          "upper": 8.84,
          "signal": "stable",
          "label": "5 เมษายน 2570"
        },
        {
          "date": "2027-04-06",
          "day": 6,
          "price": 7.39,
          "lower": 5.96,
          "upper": 8.82,
          "signal": "stable",
          "label": "6 เมษายน 2570"
        },
        {
          "date": "2027-04-07",
          "day": 7,
          "price": 7.37,
          "lower": 5.94,
          "upper": 8.8,
          "signal": "stable",
          "label": "7 เมษายน 2570"
        },
        {
          "date": "2027-04-08",
          "day": 8,
          "price": 7.34,
          "lower": 5.91,
          "upper": 8.77,
          "signal": "stable",
          "label": "8 เมษายน 2570"
        },
        {
          "date": "2027-04-09",
          "day": 9,
          "price": 7.32,
          "lower": 5.88,
          "upper": 8.76,
          "signal": "stable",
          "label": "9 เมษายน 2570"
        },
        {
          "date": "2027-04-10",
          "day": 10,
          "price": 7.3,
          "lower": 5.86,
          "upper": 8.74,
          "signal": "stable",
          "label": "10 เมษายน 2570"
        },
        {
          "date": "2027-04-11",
          "day": 11,
          "price": 7.28,
          "lower": 5.84,
          "upper": 8.72,
          "signal": "stable",
          "label": "11 เมษายน 2570"
        },
        {
          "date": "2027-04-12",
          "day": 12,
          "price": 7.26,
          "lower": 5.82,
          "upper": 8.7,
          "signal": "stable",
          "label": "12 เมษายน 2570"
        },
        {
          "date": "2027-04-13",
          "day": 13,
          "price": 7.24,
          "lower": 5.8,
          "upper": 8.68,
          "signal": "stable",
          "label": "13 เมษายน 2570"
        },
        {
          "date": "2027-04-14",
          "day": 14,
          "price": 7.22,
          "lower": 5.77,
          "upper": 8.67,
          "signal": "stable",
          "label": "14 เมษายน 2570"
        },
        {
          "date": "2027-04-15",
          "day": 15,
          "price": 7.19,
          "lower": 5.74,
          "upper": 8.64,
          "signal": "stable",
          "label": "15 เมษายน 2570"
        },
        {
          "date": "2027-04-16",
          "day": 16,
          "price": 7.17,
          "lower": 5.72,
          "upper": 8.62,
          "signal": "stable",
          "label": "16 เมษายน 2570"
        },
        {
          "date": "2027-04-17",
          "day": 17,
          "price": 7.15,
          "lower": 5.7,
          "upper": 8.6,
          "signal": "stable",
          "label": "17 เมษายน 2570"
        },
        {
          "date": "2027-04-18",
          "day": 18,
          "price": 7.13,
          "lower": 5.68,
          "upper": 8.58,
          "signal": "stable",
          "label": "18 เมษายน 2570"
        },
        {
          "date": "2027-04-19",
          "day": 19,
          "price": 7.11,
          "lower": 5.65,
          "upper": 8.57,
          "signal": "stable",
          "label": "19 เมษายน 2570"
        },
        {
          "date": "2027-04-20",
          "day": 20,
          "price": 7.1,
          "lower": 5.64,
          "upper": 8.56,
          "signal": "stable",
          "label": "20 เมษายน 2570"
        },
        {
          "date": "2027-04-21",
          "day": 21,
          "price": 7.08,
          "lower": 5.62,
          "upper": 8.54,
          "signal": "stable",
          "label": "21 เมษายน 2570"
        },
        {
          "date": "2027-04-22",
          "day": 22,
          "price": 7.06,
          "lower": 5.6,
          "upper": 8.52,
          "signal": "stable",
          "label": "22 เมษายน 2570"
        },
        {
          "date": "2027-04-23",
          "day": 23,
          "price": 7.04,
          "lower": 5.58,
          "upper": 8.5,
          "signal": "stable",
          "label": "23 เมษายน 2570"
        },
        {
          "date": "2027-04-24",
          "day": 24,
          "price": 7.02,
          "lower": 5.55,
          "upper": 8.49,
          "signal": "stable",
          "label": "24 เมษายน 2570"
        },
        {
          "date": "2027-04-25",
          "day": 25,
          "price": 7,
          "lower": 5.53,
          "upper": 8.47,
          "signal": "stable",
          "label": "25 เมษายน 2570"
        },
        {
          "date": "2027-04-26",
          "day": 26,
          "price": 6.99,
          "lower": 5.52,
          "upper": 8.46,
          "signal": "stable",
          "label": "26 เมษายน 2570"
        },
        {
          "date": "2027-04-27",
          "day": 27,
          "price": 6.97,
          "lower": 5.5,
          "upper": 8.44,
          "signal": "stable",
          "label": "27 เมษายน 2570"
        },
        {
          "date": "2027-04-28",
          "day": 28,
          "price": 6.96,
          "lower": 5.49,
          "upper": 8.43,
          "signal": "stable",
          "label": "28 เมษายน 2570"
        },
        {
          "date": "2027-04-29",
          "day": 29,
          "price": 6.99,
          "lower": 5.51,
          "upper": 8.47,
          "signal": "stable",
          "label": "29 เมษายน 2570"
        },
        {
          "date": "2027-04-30",
          "day": 30,
          "price": 7.02,
          "lower": 5.54,
          "upper": 8.5,
          "signal": "stable",
          "label": "30 เมษายน 2570"
        }
      ],
      "average": 7.19,
      "min": 6.96,
      "max": 7.46
    },
    {
      "key": "2027-05",
      "month": 5,
      "year": 2027,
      "beYear": 2570,
      "title": "พฤษภาคม 2570",
      "days": [
        {
          "date": "2027-05-01",
          "day": 1,
          "price": 7.05,
          "lower": 5.57,
          "upper": 8.53,
          "signal": "stable",
          "label": "1 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-02",
          "day": 2,
          "price": 7.08,
          "lower": 5.6,
          "upper": 8.56,
          "signal": "stable",
          "label": "2 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-03",
          "day": 3,
          "price": 7.11,
          "lower": 5.63,
          "upper": 8.59,
          "signal": "stable",
          "label": "3 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-04",
          "day": 4,
          "price": 7.1,
          "lower": 5.61,
          "upper": 8.59,
          "signal": "stable",
          "label": "4 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-05",
          "day": 5,
          "price": 7.09,
          "lower": 5.6,
          "upper": 8.58,
          "signal": "stable",
          "label": "5 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-06",
          "day": 6,
          "price": 7.08,
          "lower": 5.59,
          "upper": 8.57,
          "signal": "stable",
          "label": "6 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-07",
          "day": 7,
          "price": 7.07,
          "lower": 5.58,
          "upper": 8.56,
          "signal": "stable",
          "label": "7 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-08",
          "day": 8,
          "price": 7.05,
          "lower": 5.56,
          "upper": 8.54,
          "signal": "stable",
          "label": "8 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-09",
          "day": 9,
          "price": 7.05,
          "lower": 5.55,
          "upper": 8.55,
          "signal": "stable",
          "label": "9 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-10",
          "day": 10,
          "price": 7.04,
          "lower": 5.54,
          "upper": 8.54,
          "signal": "stable",
          "label": "10 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-11",
          "day": 11,
          "price": 7.03,
          "lower": 5.53,
          "upper": 8.53,
          "signal": "stable",
          "label": "11 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-12",
          "day": 12,
          "price": 7.03,
          "lower": 5.53,
          "upper": 8.53,
          "signal": "stable",
          "label": "12 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-13",
          "day": 13,
          "price": 7.02,
          "lower": 5.52,
          "upper": 8.52,
          "signal": "stable",
          "label": "13 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-14",
          "day": 14,
          "price": 7.01,
          "lower": 5.5,
          "upper": 8.52,
          "signal": "stable",
          "label": "14 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-15",
          "day": 15,
          "price": 7,
          "lower": 5.49,
          "upper": 8.51,
          "signal": "stable",
          "label": "15 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-16",
          "day": 16,
          "price": 7,
          "lower": 5.49,
          "upper": 8.51,
          "signal": "stable",
          "label": "16 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-17",
          "day": 17,
          "price": 6.99,
          "lower": 5.48,
          "upper": 8.5,
          "signal": "stable",
          "label": "17 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-18",
          "day": 18,
          "price": 6.99,
          "lower": 5.48,
          "upper": 8.5,
          "signal": "stable",
          "label": "18 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-19",
          "day": 19,
          "price": 6.98,
          "lower": 5.46,
          "upper": 8.5,
          "signal": "stable",
          "label": "19 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-20",
          "day": 20,
          "price": 6.98,
          "lower": 5.46,
          "upper": 8.5,
          "signal": "stable",
          "label": "20 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-21",
          "day": 21,
          "price": 6.97,
          "lower": 5.45,
          "upper": 8.49,
          "signal": "stable",
          "label": "21 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-22",
          "day": 22,
          "price": 6.97,
          "lower": 5.45,
          "upper": 8.49,
          "signal": "stable",
          "label": "22 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-23",
          "day": 23,
          "price": 6.97,
          "lower": 5.45,
          "upper": 8.49,
          "signal": "stable",
          "label": "23 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-24",
          "day": 24,
          "price": 6.97,
          "lower": 5.44,
          "upper": 8.5,
          "signal": "stable",
          "label": "24 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-25",
          "day": 25,
          "price": 6.97,
          "lower": 5.44,
          "upper": 8.5,
          "signal": "stable",
          "label": "25 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-26",
          "day": 26,
          "price": 6.97,
          "lower": 5.44,
          "upper": 8.5,
          "signal": "stable",
          "label": "26 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-27",
          "day": 27,
          "price": 6.96,
          "lower": 5.43,
          "upper": 8.49,
          "signal": "stable",
          "label": "27 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-28",
          "day": 28,
          "price": 6.96,
          "lower": 5.43,
          "upper": 8.49,
          "signal": "stable",
          "label": "28 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-29",
          "day": 29,
          "price": 6.96,
          "lower": 5.42,
          "upper": 8.5,
          "signal": "stable",
          "label": "29 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-30",
          "day": 30,
          "price": 6.96,
          "lower": 5.42,
          "upper": 8.5,
          "signal": "stable",
          "label": "30 พฤษภาคม 2570"
        },
        {
          "date": "2027-05-31",
          "day": 31,
          "price": 6.96,
          "lower": 5.42,
          "upper": 8.5,
          "signal": "stable",
          "label": "31 พฤษภาคม 2570"
        }
      ],
      "average": 7.01,
      "min": 6.96,
      "max": 7.11
    }
  ],
  "predictions": [
    {
      "date": "2026-06-01",
      "day": 1,
      "price": 7.04,
      "lower": 6.23,
      "upper": 7.85,
      "signal": "stable",
      "label": "1 มิถุนายน 2569"
    },
    {
      "date": "2026-06-02",
      "day": 2,
      "price": 7.04,
      "lower": 6.23,
      "upper": 7.85,
      "signal": "stable",
      "label": "2 มิถุนายน 2569"
    },
    {
      "date": "2026-06-03",
      "day": 3,
      "price": 7.04,
      "lower": 6.22,
      "upper": 7.86,
      "signal": "stable",
      "label": "3 มิถุนายน 2569"
    },
    {
      "date": "2026-06-04",
      "day": 4,
      "price": 7.04,
      "lower": 6.22,
      "upper": 7.86,
      "signal": "stable",
      "label": "4 มิถุนายน 2569"
    },
    {
      "date": "2026-06-05",
      "day": 5,
      "price": 7.04,
      "lower": 6.22,
      "upper": 7.86,
      "signal": "stable",
      "label": "5 มิถุนายน 2569"
    },
    {
      "date": "2026-06-06",
      "day": 6,
      "price": 7.04,
      "lower": 6.22,
      "upper": 7.86,
      "signal": "stable",
      "label": "6 มิถุนายน 2569"
    },
    {
      "date": "2026-06-07",
      "day": 7,
      "price": 7.04,
      "lower": 6.22,
      "upper": 7.86,
      "signal": "stable",
      "label": "7 มิถุนายน 2569"
    },
    {
      "date": "2026-06-08",
      "day": 8,
      "price": 7.04,
      "lower": 6.21,
      "upper": 7.87,
      "signal": "stable",
      "label": "8 มิถุนายน 2569"
    },
    {
      "date": "2026-06-09",
      "day": 9,
      "price": 7.05,
      "lower": 6.22,
      "upper": 7.88,
      "signal": "stable",
      "label": "9 มิถุนายน 2569"
    },
    {
      "date": "2026-06-10",
      "day": 10,
      "price": 7.05,
      "lower": 6.22,
      "upper": 7.88,
      "signal": "stable",
      "label": "10 มิถุนายน 2569"
    },
    {
      "date": "2026-06-11",
      "day": 11,
      "price": 7.04,
      "lower": 6.21,
      "upper": 7.87,
      "signal": "stable",
      "label": "11 มิถุนายน 2569"
    },
    {
      "date": "2026-06-12",
      "day": 12,
      "price": 7.04,
      "lower": 6.21,
      "upper": 7.87,
      "signal": "stable",
      "label": "12 มิถุนายน 2569"
    },
    {
      "date": "2026-06-13",
      "day": 13,
      "price": 7.04,
      "lower": 6.2,
      "upper": 7.88,
      "signal": "stable",
      "label": "13 มิถุนายน 2569"
    },
    {
      "date": "2026-06-14",
      "day": 14,
      "price": 7.05,
      "lower": 6.21,
      "upper": 7.89,
      "signal": "stable",
      "label": "14 มิถุนายน 2569"
    },
    {
      "date": "2026-06-15",
      "day": 15,
      "price": 7.05,
      "lower": 6.21,
      "upper": 7.89,
      "signal": "stable",
      "label": "15 มิถุนายน 2569"
    },
    {
      "date": "2026-06-16",
      "day": 16,
      "price": 7.05,
      "lower": 6.21,
      "upper": 7.89,
      "signal": "stable",
      "label": "16 มิถุนายน 2569"
    },
    {
      "date": "2026-06-17",
      "day": 17,
      "price": 7.05,
      "lower": 6.21,
      "upper": 7.89,
      "signal": "stable",
      "label": "17 มิถุนายน 2569"
    },
    {
      "date": "2026-06-18",
      "day": 18,
      "price": 7.05,
      "lower": 6.2,
      "upper": 7.9,
      "signal": "stable",
      "label": "18 มิถุนายน 2569"
    },
    {
      "date": "2026-06-19",
      "day": 19,
      "price": 7.05,
      "lower": 6.2,
      "upper": 7.9,
      "signal": "stable",
      "label": "19 มิถุนายน 2569"
    },
    {
      "date": "2026-06-20",
      "day": 20,
      "price": 7.05,
      "lower": 6.2,
      "upper": 7.9,
      "signal": "stable",
      "label": "20 มิถุนายน 2569"
    },
    {
      "date": "2026-06-21",
      "day": 21,
      "price": 7.05,
      "lower": 6.2,
      "upper": 7.9,
      "signal": "stable",
      "label": "21 มิถุนายน 2569"
    },
    {
      "date": "2026-06-22",
      "day": 22,
      "price": 7.05,
      "lower": 6.2,
      "upper": 7.9,
      "signal": "stable",
      "label": "22 มิถุนายน 2569"
    },
    {
      "date": "2026-06-23",
      "day": 23,
      "price": 7.05,
      "lower": 6.19,
      "upper": 7.91,
      "signal": "stable",
      "label": "23 มิถุนายน 2569"
    },
    {
      "date": "2026-06-24",
      "day": 24,
      "price": 7.05,
      "lower": 6.19,
      "upper": 7.91,
      "signal": "stable",
      "label": "24 มิถุนายน 2569"
    },
    {
      "date": "2026-06-25",
      "day": 25,
      "price": 7.05,
      "lower": 6.19,
      "upper": 7.91,
      "signal": "stable",
      "label": "25 มิถุนายน 2569"
    },
    {
      "date": "2026-06-26",
      "day": 26,
      "price": 7.05,
      "lower": 6.19,
      "upper": 7.91,
      "signal": "stable",
      "label": "26 มิถุนายน 2569"
    },
    {
      "date": "2026-06-27",
      "day": 27,
      "price": 7.04,
      "lower": 6.18,
      "upper": 7.9,
      "signal": "stable",
      "label": "27 มิถุนายน 2569"
    },
    {
      "date": "2026-06-28",
      "day": 28,
      "price": 7.04,
      "lower": 6.17,
      "upper": 7.91,
      "signal": "stable",
      "label": "28 มิถุนายน 2569"
    },
    {
      "date": "2026-06-29",
      "day": 29,
      "price": 7.06,
      "lower": 6.19,
      "upper": 7.93,
      "signal": "stable",
      "label": "29 มิถุนายน 2569"
    },
    {
      "date": "2026-06-30",
      "day": 30,
      "price": 7.08,
      "lower": 6.21,
      "upper": 7.95,
      "signal": "stable",
      "label": "30 มิถุนายน 2569"
    },
    {
      "date": "2026-07-01",
      "day": 1,
      "price": 7.09,
      "lower": 6.22,
      "upper": 7.96,
      "signal": "stable",
      "label": "1 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-02",
      "day": 2,
      "price": 7.1,
      "lower": 6.23,
      "upper": 7.97,
      "signal": "stable",
      "label": "2 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-03",
      "day": 3,
      "price": 7.11,
      "lower": 6.23,
      "upper": 7.99,
      "signal": "stable",
      "label": "3 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-04",
      "day": 4,
      "price": 7.11,
      "lower": 6.23,
      "upper": 7.99,
      "signal": "stable",
      "label": "4 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-05",
      "day": 5,
      "price": 7.11,
      "lower": 6.23,
      "upper": 7.99,
      "signal": "stable",
      "label": "5 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-06",
      "day": 6,
      "price": 7.11,
      "lower": 6.23,
      "upper": 7.99,
      "signal": "stable",
      "label": "6 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-07",
      "day": 7,
      "price": 7.11,
      "lower": 6.23,
      "upper": 7.99,
      "signal": "stable",
      "label": "7 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-08",
      "day": 8,
      "price": 7.1,
      "lower": 6.21,
      "upper": 7.99,
      "signal": "stable",
      "label": "8 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-09",
      "day": 9,
      "price": 7.1,
      "lower": 6.21,
      "upper": 7.99,
      "signal": "stable",
      "label": "9 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-10",
      "day": 10,
      "price": 7.09,
      "lower": 6.2,
      "upper": 7.98,
      "signal": "stable",
      "label": "10 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-11",
      "day": 11,
      "price": 7.09,
      "lower": 6.2,
      "upper": 7.98,
      "signal": "stable",
      "label": "11 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-12",
      "day": 12,
      "price": 7.09,
      "lower": 6.2,
      "upper": 7.98,
      "signal": "stable",
      "label": "12 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-13",
      "day": 13,
      "price": 7.08,
      "lower": 6.18,
      "upper": 7.98,
      "signal": "stable",
      "label": "13 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-14",
      "day": 14,
      "price": 7.08,
      "lower": 6.18,
      "upper": 7.98,
      "signal": "stable",
      "label": "14 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-15",
      "day": 15,
      "price": 7.08,
      "lower": 6.18,
      "upper": 7.98,
      "signal": "stable",
      "label": "15 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-16",
      "day": 16,
      "price": 7.07,
      "lower": 6.17,
      "upper": 7.97,
      "signal": "stable",
      "label": "16 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-17",
      "day": 17,
      "price": 7.06,
      "lower": 6.16,
      "upper": 7.96,
      "signal": "stable",
      "label": "17 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-18",
      "day": 18,
      "price": 7.06,
      "lower": 6.15,
      "upper": 7.97,
      "signal": "stable",
      "label": "18 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-19",
      "day": 19,
      "price": 7.05,
      "lower": 6.14,
      "upper": 7.96,
      "signal": "stable",
      "label": "19 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-20",
      "day": 20,
      "price": 7.05,
      "lower": 6.14,
      "upper": 7.96,
      "signal": "stable",
      "label": "20 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-21",
      "day": 21,
      "price": 7.05,
      "lower": 6.14,
      "upper": 7.96,
      "signal": "stable",
      "label": "21 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-22",
      "day": 22,
      "price": 7.04,
      "lower": 6.13,
      "upper": 7.95,
      "signal": "stable",
      "label": "22 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-23",
      "day": 23,
      "price": 7.03,
      "lower": 6.11,
      "upper": 7.95,
      "signal": "stable",
      "label": "23 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-24",
      "day": 24,
      "price": 7.03,
      "lower": 6.11,
      "upper": 7.95,
      "signal": "stable",
      "label": "24 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-25",
      "day": 25,
      "price": 7.02,
      "lower": 6.1,
      "upper": 7.94,
      "signal": "stable",
      "label": "25 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-26",
      "day": 26,
      "price": 7.02,
      "lower": 6.1,
      "upper": 7.94,
      "signal": "stable",
      "label": "26 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-27",
      "day": 27,
      "price": 7.01,
      "lower": 6.09,
      "upper": 7.93,
      "signal": "stable",
      "label": "27 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-28",
      "day": 28,
      "price": 7.01,
      "lower": 6.08,
      "upper": 7.94,
      "signal": "stable",
      "label": "28 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-29",
      "day": 29,
      "price": 7,
      "lower": 6.07,
      "upper": 7.93,
      "signal": "stable",
      "label": "29 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-30",
      "day": 30,
      "price": 7.04,
      "lower": 6.11,
      "upper": 7.97,
      "signal": "stable",
      "label": "30 กรกฎาคม 2569"
    },
    {
      "date": "2026-07-31",
      "day": 31,
      "price": 7.07,
      "lower": 6.14,
      "upper": 8,
      "signal": "stable",
      "label": "31 กรกฎาคม 2569"
    },
    {
      "date": "2026-08-01",
      "day": 1,
      "price": 7.1,
      "lower": 6.17,
      "upper": 8.03,
      "signal": "stable",
      "label": "1 สิงหาคม 2569"
    },
    {
      "date": "2026-08-02",
      "day": 2,
      "price": 7.14,
      "lower": 6.2,
      "upper": 8.08,
      "signal": "stable",
      "label": "2 สิงหาคม 2569"
    },
    {
      "date": "2026-08-03",
      "day": 3,
      "price": 7.18,
      "lower": 6.24,
      "upper": 8.12,
      "signal": "stable",
      "label": "3 สิงหาคม 2569"
    },
    {
      "date": "2026-08-04",
      "day": 4,
      "price": 7.17,
      "lower": 6.23,
      "upper": 8.11,
      "signal": "stable",
      "label": "4 สิงหาคม 2569"
    },
    {
      "date": "2026-08-05",
      "day": 5,
      "price": 7.17,
      "lower": 6.23,
      "upper": 8.11,
      "signal": "stable",
      "label": "5 สิงหาคม 2569"
    },
    {
      "date": "2026-08-06",
      "day": 6,
      "price": 7.16,
      "lower": 6.22,
      "upper": 8.1,
      "signal": "stable",
      "label": "6 สิงหาคม 2569"
    },
    {
      "date": "2026-08-07",
      "day": 7,
      "price": 7.16,
      "lower": 6.21,
      "upper": 8.11,
      "signal": "stable",
      "label": "7 สิงหาคม 2569"
    },
    {
      "date": "2026-08-08",
      "day": 8,
      "price": 7.15,
      "lower": 6.2,
      "upper": 8.1,
      "signal": "stable",
      "label": "8 สิงหาคม 2569"
    },
    {
      "date": "2026-08-09",
      "day": 9,
      "price": 7.15,
      "lower": 6.2,
      "upper": 8.1,
      "signal": "stable",
      "label": "9 สิงหาคม 2569"
    },
    {
      "date": "2026-08-10",
      "day": 10,
      "price": 7.15,
      "lower": 6.2,
      "upper": 8.1,
      "signal": "stable",
      "label": "10 สิงหาคม 2569"
    },
    {
      "date": "2026-08-11",
      "day": 11,
      "price": 7.15,
      "lower": 6.2,
      "upper": 8.1,
      "signal": "stable",
      "label": "11 สิงหาคม 2569"
    },
    {
      "date": "2026-08-12",
      "day": 12,
      "price": 7.14,
      "lower": 6.18,
      "upper": 8.1,
      "signal": "stable",
      "label": "12 สิงหาคม 2569"
    },
    {
      "date": "2026-08-13",
      "day": 13,
      "price": 7.14,
      "lower": 6.18,
      "upper": 8.1,
      "signal": "stable",
      "label": "13 สิงหาคม 2569"
    },
    {
      "date": "2026-08-14",
      "day": 14,
      "price": 7.13,
      "lower": 6.17,
      "upper": 8.09,
      "signal": "stable",
      "label": "14 สิงหาคม 2569"
    },
    {
      "date": "2026-08-15",
      "day": 15,
      "price": 7.13,
      "lower": 6.17,
      "upper": 8.09,
      "signal": "stable",
      "label": "15 สิงหาคม 2569"
    },
    {
      "date": "2026-08-16",
      "day": 16,
      "price": 7.13,
      "lower": 6.17,
      "upper": 8.09,
      "signal": "stable",
      "label": "16 สิงหาคม 2569"
    },
    {
      "date": "2026-08-17",
      "day": 17,
      "price": 7.13,
      "lower": 6.16,
      "upper": 8.1,
      "signal": "stable",
      "label": "17 สิงหาคม 2569"
    },
    {
      "date": "2026-08-18",
      "day": 18,
      "price": 7.13,
      "lower": 6.16,
      "upper": 8.1,
      "signal": "stable",
      "label": "18 สิงหาคม 2569"
    },
    {
      "date": "2026-08-19",
      "day": 19,
      "price": 7.13,
      "lower": 6.16,
      "upper": 8.1,
      "signal": "stable",
      "label": "19 สิงหาคม 2569"
    },
    {
      "date": "2026-08-20",
      "day": 20,
      "price": 7.13,
      "lower": 6.16,
      "upper": 8.1,
      "signal": "stable",
      "label": "20 สิงหาคม 2569"
    },
    {
      "date": "2026-08-21",
      "day": 21,
      "price": 7.13,
      "lower": 6.16,
      "upper": 8.1,
      "signal": "stable",
      "label": "21 สิงหาคม 2569"
    },
    {
      "date": "2026-08-22",
      "day": 22,
      "price": 7.13,
      "lower": 6.15,
      "upper": 8.11,
      "signal": "stable",
      "label": "22 สิงหาคม 2569"
    },
    {
      "date": "2026-08-23",
      "day": 23,
      "price": 7.13,
      "lower": 6.15,
      "upper": 8.11,
      "signal": "stable",
      "label": "23 สิงหาคม 2569"
    },
    {
      "date": "2026-08-24",
      "day": 24,
      "price": 7.14,
      "lower": 6.16,
      "upper": 8.12,
      "signal": "stable",
      "label": "24 สิงหาคม 2569"
    },
    {
      "date": "2026-08-25",
      "day": 25,
      "price": 7.14,
      "lower": 6.16,
      "upper": 8.12,
      "signal": "stable",
      "label": "25 สิงหาคม 2569"
    },
    {
      "date": "2026-08-26",
      "day": 26,
      "price": 7.14,
      "lower": 6.16,
      "upper": 8.12,
      "signal": "stable",
      "label": "26 สิงหาคม 2569"
    },
    {
      "date": "2026-08-27",
      "day": 27,
      "price": 7.15,
      "lower": 6.16,
      "upper": 8.14,
      "signal": "stable",
      "label": "27 สิงหาคม 2569"
    },
    {
      "date": "2026-08-28",
      "day": 28,
      "price": 7.15,
      "lower": 6.16,
      "upper": 8.14,
      "signal": "stable",
      "label": "28 สิงหาคม 2569"
    },
    {
      "date": "2026-08-29",
      "day": 29,
      "price": 7.15,
      "lower": 6.16,
      "upper": 8.14,
      "signal": "stable",
      "label": "29 สิงหาคม 2569"
    },
    {
      "date": "2026-08-30",
      "day": 30,
      "price": 7.11,
      "lower": 6.12,
      "upper": 8.1,
      "signal": "stable",
      "label": "30 สิงหาคม 2569"
    },
    {
      "date": "2026-08-31",
      "day": 31,
      "price": 7.08,
      "lower": 6.09,
      "upper": 8.07,
      "signal": "stable",
      "label": "31 สิงหาคม 2569"
    },
    {
      "date": "2026-09-01",
      "day": 1,
      "price": 7.04,
      "lower": 6.04,
      "upper": 8.04,
      "signal": "stable",
      "label": "1 กันยายน 2569"
    },
    {
      "date": "2026-09-02",
      "day": 2,
      "price": 7.01,
      "lower": 6.01,
      "upper": 8.01,
      "signal": "stable",
      "label": "2 กันยายน 2569"
    },
    {
      "date": "2026-09-03",
      "day": 3,
      "price": 6.97,
      "lower": 5.97,
      "upper": 7.97,
      "signal": "stable",
      "label": "3 กันยายน 2569"
    },
    {
      "date": "2026-09-04",
      "day": 4,
      "price": 6.97,
      "lower": 5.97,
      "upper": 7.97,
      "signal": "stable",
      "label": "4 กันยายน 2569"
    },
    {
      "date": "2026-09-05",
      "day": 5,
      "price": 6.98,
      "lower": 5.98,
      "upper": 7.98,
      "signal": "stable",
      "label": "5 กันยายน 2569"
    },
    {
      "date": "2026-09-06",
      "day": 6,
      "price": 6.99,
      "lower": 5.98,
      "upper": 8,
      "signal": "stable",
      "label": "6 กันยายน 2569"
    },
    {
      "date": "2026-09-07",
      "day": 7,
      "price": 7,
      "lower": 5.99,
      "upper": 8.01,
      "signal": "stable",
      "label": "7 กันยายน 2569"
    },
    {
      "date": "2026-09-08",
      "day": 8,
      "price": 7.01,
      "lower": 6,
      "upper": 8.02,
      "signal": "stable",
      "label": "8 กันยายน 2569"
    },
    {
      "date": "2026-09-09",
      "day": 9,
      "price": 7.02,
      "lower": 6.01,
      "upper": 8.03,
      "signal": "stable",
      "label": "9 กันยายน 2569"
    },
    {
      "date": "2026-09-10",
      "day": 10,
      "price": 7.03,
      "lower": 6.02,
      "upper": 8.04,
      "signal": "stable",
      "label": "10 กันยายน 2569"
    },
    {
      "date": "2026-09-11",
      "day": 11,
      "price": 7.04,
      "lower": 6.02,
      "upper": 8.06,
      "signal": "stable",
      "label": "11 กันยายน 2569"
    },
    {
      "date": "2026-09-12",
      "day": 12,
      "price": 7.05,
      "lower": 6.03,
      "upper": 8.07,
      "signal": "stable",
      "label": "12 กันยายน 2569"
    },
    {
      "date": "2026-09-13",
      "day": 13,
      "price": 7.06,
      "lower": 6.04,
      "upper": 8.08,
      "signal": "stable",
      "label": "13 กันยายน 2569"
    },
    {
      "date": "2026-09-14",
      "day": 14,
      "price": 7.08,
      "lower": 6.06,
      "upper": 8.1,
      "signal": "stable",
      "label": "14 กันยายน 2569"
    },
    {
      "date": "2026-09-15",
      "day": 15,
      "price": 7.09,
      "lower": 6.07,
      "upper": 8.11,
      "signal": "stable",
      "label": "15 กันยายน 2569"
    },
    {
      "date": "2026-09-16",
      "day": 16,
      "price": 7.11,
      "lower": 6.08,
      "upper": 8.14,
      "signal": "stable",
      "label": "16 กันยายน 2569"
    },
    {
      "date": "2026-09-17",
      "day": 17,
      "price": 7.12,
      "lower": 6.09,
      "upper": 8.15,
      "signal": "stable",
      "label": "17 กันยายน 2569"
    },
    {
      "date": "2026-09-18",
      "day": 18,
      "price": 7.13,
      "lower": 6.1,
      "upper": 8.16,
      "signal": "stable",
      "label": "18 กันยายน 2569"
    },
    {
      "date": "2026-09-19",
      "day": 19,
      "price": 7.14,
      "lower": 6.11,
      "upper": 8.17,
      "signal": "stable",
      "label": "19 กันยายน 2569"
    },
    {
      "date": "2026-09-20",
      "day": 20,
      "price": 7.16,
      "lower": 6.13,
      "upper": 8.19,
      "signal": "stable",
      "label": "20 กันยายน 2569"
    },
    {
      "date": "2026-09-21",
      "day": 21,
      "price": 7.18,
      "lower": 6.14,
      "upper": 8.22,
      "signal": "stable",
      "label": "21 กันยายน 2569"
    },
    {
      "date": "2026-09-22",
      "day": 22,
      "price": 7.2,
      "lower": 6.16,
      "upper": 8.24,
      "signal": "stable",
      "label": "22 กันยายน 2569"
    },
    {
      "date": "2026-09-23",
      "day": 23,
      "price": 7.21,
      "lower": 6.17,
      "upper": 8.25,
      "signal": "stable",
      "label": "23 กันยายน 2569"
    },
    {
      "date": "2026-09-24",
      "day": 24,
      "price": 7.22,
      "lower": 6.18,
      "upper": 8.26,
      "signal": "stable",
      "label": "24 กันยายน 2569"
    },
    {
      "date": "2026-09-25",
      "day": 25,
      "price": 7.24,
      "lower": 6.2,
      "upper": 8.28,
      "signal": "stable",
      "label": "25 กันยายน 2569"
    },
    {
      "date": "2026-09-26",
      "day": 26,
      "price": 7.26,
      "lower": 6.21,
      "upper": 8.31,
      "signal": "stable",
      "label": "26 กันยายน 2569"
    },
    {
      "date": "2026-09-27",
      "day": 27,
      "price": 7.27,
      "lower": 6.22,
      "upper": 8.32,
      "signal": "stable",
      "label": "27 กันยายน 2569"
    },
    {
      "date": "2026-09-28",
      "day": 28,
      "price": 7.29,
      "lower": 6.24,
      "upper": 8.34,
      "signal": "stable",
      "label": "28 กันยายน 2569"
    },
    {
      "date": "2026-09-29",
      "day": 29,
      "price": 7.33,
      "lower": 6.28,
      "upper": 8.38,
      "signal": "stable",
      "label": "29 กันยายน 2569"
    },
    {
      "date": "2026-09-30",
      "day": 30,
      "price": 7.37,
      "lower": 6.32,
      "upper": 8.42,
      "signal": "stable",
      "label": "30 กันยายน 2569"
    },
    {
      "date": "2026-10-01",
      "day": 1,
      "price": 7.4,
      "lower": 6.34,
      "upper": 8.46,
      "signal": "low",
      "label": "1 ตุลาคม 2569"
    },
    {
      "date": "2026-10-02",
      "day": 2,
      "price": 7.43,
      "lower": 6.37,
      "upper": 8.49,
      "signal": "stable",
      "label": "2 ตุลาคม 2569"
    },
    {
      "date": "2026-10-03",
      "day": 3,
      "price": 7.47,
      "lower": 6.41,
      "upper": 8.53,
      "signal": "stable",
      "label": "3 ตุลาคม 2569"
    },
    {
      "date": "2026-10-04",
      "day": 4,
      "price": 7.49,
      "lower": 6.43,
      "upper": 8.55,
      "signal": "stable",
      "label": "4 ตุลาคม 2569"
    },
    {
      "date": "2026-10-05",
      "day": 5,
      "price": 7.51,
      "lower": 6.45,
      "upper": 8.57,
      "signal": "stable",
      "label": "5 ตุลาคม 2569"
    },
    {
      "date": "2026-10-06",
      "day": 6,
      "price": 7.53,
      "lower": 6.46,
      "upper": 8.6,
      "signal": "stable",
      "label": "6 ตุลาคม 2569"
    },
    {
      "date": "2026-10-07",
      "day": 7,
      "price": 7.55,
      "lower": 6.48,
      "upper": 8.62,
      "signal": "stable",
      "label": "7 ตุลาคม 2569"
    },
    {
      "date": "2026-10-08",
      "day": 8,
      "price": 7.56,
      "lower": 6.49,
      "upper": 8.63,
      "signal": "stable",
      "label": "8 ตุลาคม 2569"
    },
    {
      "date": "2026-10-09",
      "day": 9,
      "price": 7.58,
      "lower": 6.51,
      "upper": 8.65,
      "signal": "stable",
      "label": "9 ตุลาคม 2569"
    },
    {
      "date": "2026-10-10",
      "day": 10,
      "price": 7.6,
      "lower": 6.53,
      "upper": 8.67,
      "signal": "stable",
      "label": "10 ตุลาคม 2569"
    },
    {
      "date": "2026-10-11",
      "day": 11,
      "price": 7.62,
      "lower": 6.54,
      "upper": 8.7,
      "signal": "stable",
      "label": "11 ตุลาคม 2569"
    },
    {
      "date": "2026-10-12",
      "day": 12,
      "price": 7.64,
      "lower": 6.56,
      "upper": 8.72,
      "signal": "stable",
      "label": "12 ตุลาคม 2569"
    },
    {
      "date": "2026-10-13",
      "day": 13,
      "price": 7.66,
      "lower": 6.58,
      "upper": 8.74,
      "signal": "stable",
      "label": "13 ตุลาคม 2569"
    },
    {
      "date": "2026-10-14",
      "day": 14,
      "price": 7.68,
      "lower": 6.6,
      "upper": 8.76,
      "signal": "stable",
      "label": "14 ตุลาคม 2569"
    },
    {
      "date": "2026-10-15",
      "day": 15,
      "price": 7.7,
      "lower": 6.62,
      "upper": 8.78,
      "signal": "stable",
      "label": "15 ตุลาคม 2569"
    },
    {
      "date": "2026-10-16",
      "day": 16,
      "price": 7.71,
      "lower": 6.62,
      "upper": 8.8,
      "signal": "stable",
      "label": "16 ตุลาคม 2569"
    },
    {
      "date": "2026-10-17",
      "day": 17,
      "price": 7.73,
      "lower": 6.64,
      "upper": 8.82,
      "signal": "stable",
      "label": "17 ตุลาคม 2569"
    },
    {
      "date": "2026-10-18",
      "day": 18,
      "price": 7.75,
      "lower": 6.66,
      "upper": 8.84,
      "signal": "stable",
      "label": "18 ตุลาคม 2569"
    },
    {
      "date": "2026-10-19",
      "day": 19,
      "price": 7.77,
      "lower": 6.68,
      "upper": 8.86,
      "signal": "stable",
      "label": "19 ตุลาคม 2569"
    },
    {
      "date": "2026-10-20",
      "day": 20,
      "price": 7.79,
      "lower": 6.7,
      "upper": 8.88,
      "signal": "stable",
      "label": "20 ตุลาคม 2569"
    },
    {
      "date": "2026-10-21",
      "day": 21,
      "price": 7.81,
      "lower": 6.71,
      "upper": 8.91,
      "signal": "stable",
      "label": "21 ตุลาคม 2569"
    },
    {
      "date": "2026-10-22",
      "day": 22,
      "price": 7.83,
      "lower": 6.73,
      "upper": 8.93,
      "signal": "stable",
      "label": "22 ตุลาคม 2569"
    },
    {
      "date": "2026-10-23",
      "day": 23,
      "price": 7.84,
      "lower": 6.74,
      "upper": 8.94,
      "signal": "stable",
      "label": "23 ตุลาคม 2569"
    },
    {
      "date": "2026-10-24",
      "day": 24,
      "price": 7.86,
      "lower": 6.76,
      "upper": 8.96,
      "signal": "stable",
      "label": "24 ตุลาคม 2569"
    },
    {
      "date": "2026-10-25",
      "day": 25,
      "price": 7.88,
      "lower": 6.78,
      "upper": 8.98,
      "signal": "stable",
      "label": "25 ตุลาคม 2569"
    },
    {
      "date": "2026-10-26",
      "day": 26,
      "price": 7.9,
      "lower": 6.79,
      "upper": 9.01,
      "signal": "stable",
      "label": "26 ตุลาคม 2569"
    },
    {
      "date": "2026-10-27",
      "day": 27,
      "price": 7.91,
      "lower": 6.8,
      "upper": 9.02,
      "signal": "stable",
      "label": "27 ตุลาคม 2569"
    },
    {
      "date": "2026-10-28",
      "day": 28,
      "price": 7.93,
      "lower": 6.82,
      "upper": 9.04,
      "signal": "stable",
      "label": "28 ตุลาคม 2569"
    },
    {
      "date": "2026-10-29",
      "day": 29,
      "price": 7.95,
      "lower": 6.84,
      "upper": 9.06,
      "signal": "stable",
      "label": "29 ตุลาคม 2569"
    },
    {
      "date": "2026-10-30",
      "day": 30,
      "price": 7.97,
      "lower": 6.86,
      "upper": 9.08,
      "signal": "stable",
      "label": "30 ตุลาคม 2569"
    },
    {
      "date": "2026-10-31",
      "day": 31,
      "price": 8,
      "lower": 6.88,
      "upper": 9.12,
      "signal": "stable",
      "label": "31 ตุลาคม 2569"
    },
    {
      "date": "2026-11-01",
      "day": 1,
      "price": 8.02,
      "lower": 6.9,
      "upper": 9.14,
      "signal": "stable",
      "label": "1 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-02",
      "day": 2,
      "price": 8.05,
      "lower": 6.93,
      "upper": 9.17,
      "signal": "stable",
      "label": "2 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-03",
      "day": 3,
      "price": 8.08,
      "lower": 6.96,
      "upper": 9.2,
      "signal": "stable",
      "label": "3 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-04",
      "day": 4,
      "price": 8.09,
      "lower": 6.97,
      "upper": 9.21,
      "signal": "stable",
      "label": "4 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-05",
      "day": 5,
      "price": 8.1,
      "lower": 6.97,
      "upper": 9.23,
      "signal": "stable",
      "label": "5 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-06",
      "day": 6,
      "price": 8.12,
      "lower": 6.99,
      "upper": 9.25,
      "signal": "stable",
      "label": "6 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-07",
      "day": 7,
      "price": 8.13,
      "lower": 7,
      "upper": 9.26,
      "signal": "stable",
      "label": "7 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-08",
      "day": 8,
      "price": 8.14,
      "lower": 7.01,
      "upper": 9.27,
      "signal": "stable",
      "label": "8 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-09",
      "day": 9,
      "price": 8.16,
      "lower": 7.03,
      "upper": 9.29,
      "signal": "stable",
      "label": "9 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-10",
      "day": 10,
      "price": 8.17,
      "lower": 7.03,
      "upper": 9.31,
      "signal": "stable",
      "label": "10 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-11",
      "day": 11,
      "price": 8.19,
      "lower": 7.05,
      "upper": 9.33,
      "signal": "stable",
      "label": "11 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-12",
      "day": 12,
      "price": 8.2,
      "lower": 7.06,
      "upper": 9.34,
      "signal": "stable",
      "label": "12 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-13",
      "day": 13,
      "price": 8.21,
      "lower": 7.07,
      "upper": 9.35,
      "signal": "stable",
      "label": "13 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-14",
      "day": 14,
      "price": 8.22,
      "lower": 7.08,
      "upper": 9.36,
      "signal": "stable",
      "label": "14 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-15",
      "day": 15,
      "price": 8.23,
      "lower": 7.08,
      "upper": 9.38,
      "signal": "stable",
      "label": "15 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-16",
      "day": 16,
      "price": 8.24,
      "lower": 7.09,
      "upper": 9.39,
      "signal": "stable",
      "label": "16 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-17",
      "day": 17,
      "price": 8.25,
      "lower": 7.1,
      "upper": 9.4,
      "signal": "stable",
      "label": "17 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-18",
      "day": 18,
      "price": 8.26,
      "lower": 7.11,
      "upper": 9.41,
      "signal": "stable",
      "label": "18 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-19",
      "day": 19,
      "price": 8.27,
      "lower": 7.12,
      "upper": 9.42,
      "signal": "stable",
      "label": "19 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-20",
      "day": 20,
      "price": 8.28,
      "lower": 7.12,
      "upper": 9.44,
      "signal": "stable",
      "label": "20 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-21",
      "day": 21,
      "price": 8.29,
      "lower": 7.13,
      "upper": 9.45,
      "signal": "stable",
      "label": "21 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-22",
      "day": 22,
      "price": 8.3,
      "lower": 7.14,
      "upper": 9.46,
      "signal": "stable",
      "label": "22 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-23",
      "day": 23,
      "price": 8.31,
      "lower": 7.15,
      "upper": 9.47,
      "signal": "stable",
      "label": "23 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-24",
      "day": 24,
      "price": 8.32,
      "lower": 7.16,
      "upper": 9.48,
      "signal": "stable",
      "label": "24 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-25",
      "day": 25,
      "price": 8.33,
      "lower": 7.16,
      "upper": 9.5,
      "signal": "stable",
      "label": "25 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-26",
      "day": 26,
      "price": 8.33,
      "lower": 7.16,
      "upper": 9.5,
      "signal": "stable",
      "label": "26 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-27",
      "day": 27,
      "price": 8.34,
      "lower": 7.17,
      "upper": 9.51,
      "signal": "stable",
      "label": "27 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-28",
      "day": 28,
      "price": 8.35,
      "lower": 7.18,
      "upper": 9.52,
      "signal": "stable",
      "label": "28 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-29",
      "day": 29,
      "price": 8.29,
      "lower": 7.12,
      "upper": 9.46,
      "signal": "stable",
      "label": "29 พฤศจิกายน 2569"
    },
    {
      "date": "2026-11-30",
      "day": 30,
      "price": 8.23,
      "lower": 7.05,
      "upper": 9.41,
      "signal": "stable",
      "label": "30 พฤศจิกายน 2569"
    },
    {
      "date": "2026-12-01",
      "day": 1,
      "price": 8.17,
      "lower": 6.99,
      "upper": 9.35,
      "signal": "stable",
      "label": "1 ธันวาคม 2569"
    },
    {
      "date": "2026-12-02",
      "day": 2,
      "price": 8.11,
      "lower": 6.93,
      "upper": 9.29,
      "signal": "stable",
      "label": "2 ธันวาคม 2569"
    },
    {
      "date": "2026-12-03",
      "day": 3,
      "price": 8.04,
      "lower": 6.86,
      "upper": 9.22,
      "signal": "stable",
      "label": "3 ธันวาคม 2569"
    },
    {
      "date": "2026-12-04",
      "day": 4,
      "price": 8.05,
      "lower": 6.87,
      "upper": 9.23,
      "signal": "stable",
      "label": "4 ธันวาคม 2569"
    },
    {
      "date": "2026-12-05",
      "day": 5,
      "price": 8.05,
      "lower": 6.86,
      "upper": 9.24,
      "signal": "stable",
      "label": "5 ธันวาคม 2569"
    },
    {
      "date": "2026-12-06",
      "day": 6,
      "price": 8.06,
      "lower": 6.87,
      "upper": 9.25,
      "signal": "stable",
      "label": "6 ธันวาคม 2569"
    },
    {
      "date": "2026-12-07",
      "day": 7,
      "price": 8.07,
      "lower": 6.88,
      "upper": 9.26,
      "signal": "stable",
      "label": "7 ธันวาคม 2569"
    },
    {
      "date": "2026-12-08",
      "day": 8,
      "price": 8.08,
      "lower": 6.89,
      "upper": 9.27,
      "signal": "stable",
      "label": "8 ธันวาคม 2569"
    },
    {
      "date": "2026-12-09",
      "day": 9,
      "price": 8.08,
      "lower": 6.89,
      "upper": 9.27,
      "signal": "stable",
      "label": "9 ธันวาคม 2569"
    },
    {
      "date": "2026-12-10",
      "day": 10,
      "price": 8.09,
      "lower": 6.89,
      "upper": 9.29,
      "signal": "stable",
      "label": "10 ธันวาคม 2569"
    },
    {
      "date": "2026-12-11",
      "day": 11,
      "price": 8.09,
      "lower": 6.89,
      "upper": 9.29,
      "signal": "stable",
      "label": "11 ธันวาคม 2569"
    },
    {
      "date": "2026-12-12",
      "day": 12,
      "price": 8.1,
      "lower": 6.9,
      "upper": 9.3,
      "signal": "stable",
      "label": "12 ธันวาคม 2569"
    },
    {
      "date": "2026-12-13",
      "day": 13,
      "price": 8.11,
      "lower": 6.91,
      "upper": 9.31,
      "signal": "stable",
      "label": "13 ธันวาคม 2569"
    },
    {
      "date": "2026-12-14",
      "day": 14,
      "price": 8.12,
      "lower": 6.92,
      "upper": 9.32,
      "signal": "stable",
      "label": "14 ธันวาคม 2569"
    },
    {
      "date": "2026-12-15",
      "day": 15,
      "price": 8.12,
      "lower": 6.91,
      "upper": 9.33,
      "signal": "stable",
      "label": "15 ธันวาคม 2569"
    },
    {
      "date": "2026-12-16",
      "day": 16,
      "price": 8.13,
      "lower": 6.92,
      "upper": 9.34,
      "signal": "stable",
      "label": "16 ธันวาคม 2569"
    },
    {
      "date": "2026-12-17",
      "day": 17,
      "price": 8.13,
      "lower": 6.92,
      "upper": 9.34,
      "signal": "stable",
      "label": "17 ธันวาคม 2569"
    },
    {
      "date": "2026-12-18",
      "day": 18,
      "price": 8.14,
      "lower": 6.93,
      "upper": 9.35,
      "signal": "stable",
      "label": "18 ธันวาคม 2569"
    },
    {
      "date": "2026-12-19",
      "day": 19,
      "price": 8.14,
      "lower": 6.93,
      "upper": 9.35,
      "signal": "stable",
      "label": "19 ธันวาคม 2569"
    },
    {
      "date": "2026-12-20",
      "day": 20,
      "price": 8.15,
      "lower": 6.93,
      "upper": 9.37,
      "signal": "stable",
      "label": "20 ธันวาคม 2569"
    },
    {
      "date": "2026-12-21",
      "day": 21,
      "price": 8.16,
      "lower": 6.94,
      "upper": 9.38,
      "signal": "stable",
      "label": "21 ธันวาคม 2569"
    },
    {
      "date": "2026-12-22",
      "day": 22,
      "price": 8.17,
      "lower": 6.95,
      "upper": 9.39,
      "signal": "stable",
      "label": "22 ธันวาคม 2569"
    },
    {
      "date": "2026-12-23",
      "day": 23,
      "price": 8.17,
      "lower": 6.95,
      "upper": 9.39,
      "signal": "stable",
      "label": "23 ธันวาคม 2569"
    },
    {
      "date": "2026-12-24",
      "day": 24,
      "price": 8.18,
      "lower": 6.96,
      "upper": 9.4,
      "signal": "stable",
      "label": "24 ธันวาคม 2569"
    },
    {
      "date": "2026-12-25",
      "day": 25,
      "price": 8.18,
      "lower": 6.95,
      "upper": 9.41,
      "signal": "stable",
      "label": "25 ธันวาคม 2569"
    },
    {
      "date": "2026-12-26",
      "day": 26,
      "price": 8.19,
      "lower": 6.96,
      "upper": 9.42,
      "signal": "stable",
      "label": "26 ธันวาคม 2569"
    },
    {
      "date": "2026-12-27",
      "day": 27,
      "price": 8.19,
      "lower": 6.96,
      "upper": 9.42,
      "signal": "stable",
      "label": "27 ธันวาคม 2569"
    },
    {
      "date": "2026-12-28",
      "day": 28,
      "price": 8.2,
      "lower": 6.97,
      "upper": 9.43,
      "signal": "stable",
      "label": "28 ธันวาคม 2569"
    },
    {
      "date": "2026-12-29",
      "day": 29,
      "price": 8.21,
      "lower": 6.98,
      "upper": 9.44,
      "signal": "stable",
      "label": "29 ธันวาคม 2569"
    },
    {
      "date": "2026-12-30",
      "day": 30,
      "price": 8.27,
      "lower": 7.03,
      "upper": 9.51,
      "signal": "stable",
      "label": "30 ธันวาคม 2569"
    },
    {
      "date": "2026-12-31",
      "day": 31,
      "price": 8.33,
      "lower": 7.09,
      "upper": 9.57,
      "signal": "stable",
      "label": "31 ธันวาคม 2569"
    },
    {
      "date": "2027-01-01",
      "day": 1,
      "price": 8.39,
      "lower": 7.15,
      "upper": 9.63,
      "signal": "stable",
      "label": "1 มกราคม 2570"
    },
    {
      "date": "2027-01-02",
      "day": 2,
      "price": 8.46,
      "lower": 7.22,
      "upper": 9.7,
      "signal": "stable",
      "label": "2 มกราคม 2570"
    },
    {
      "date": "2027-01-03",
      "day": 3,
      "price": 8.52,
      "lower": 7.28,
      "upper": 9.76,
      "signal": "stable",
      "label": "3 มกราคม 2570"
    },
    {
      "date": "2027-01-04",
      "day": 4,
      "price": 8.53,
      "lower": 7.28,
      "upper": 9.78,
      "signal": "stable",
      "label": "4 มกราคม 2570"
    },
    {
      "date": "2027-01-05",
      "day": 5,
      "price": 8.54,
      "lower": 7.29,
      "upper": 9.79,
      "signal": "stable",
      "label": "5 มกราคม 2570"
    },
    {
      "date": "2027-01-06",
      "day": 6,
      "price": 8.54,
      "lower": 7.29,
      "upper": 9.79,
      "signal": "stable",
      "label": "6 มกราคม 2570"
    },
    {
      "date": "2027-01-07",
      "day": 7,
      "price": 8.55,
      "lower": 7.3,
      "upper": 9.8,
      "signal": "stable",
      "label": "7 มกราคม 2570"
    },
    {
      "date": "2027-01-08",
      "day": 8,
      "price": 8.55,
      "lower": 7.3,
      "upper": 9.8,
      "signal": "stable",
      "label": "8 มกราคม 2570"
    },
    {
      "date": "2027-01-09",
      "day": 9,
      "price": 8.56,
      "lower": 7.3,
      "upper": 9.82,
      "signal": "stable",
      "label": "9 มกราคม 2570"
    },
    {
      "date": "2027-01-10",
      "day": 10,
      "price": 8.57,
      "lower": 7.31,
      "upper": 9.83,
      "signal": "stable",
      "label": "10 มกราคม 2570"
    },
    {
      "date": "2027-01-11",
      "day": 11,
      "price": 8.58,
      "lower": 7.32,
      "upper": 9.84,
      "signal": "stable",
      "label": "11 มกราคม 2570"
    },
    {
      "date": "2027-01-12",
      "day": 12,
      "price": 8.58,
      "lower": 7.32,
      "upper": 9.84,
      "signal": "stable",
      "label": "12 มกราคม 2570"
    },
    {
      "date": "2027-01-13",
      "day": 13,
      "price": 8.59,
      "lower": 7.33,
      "upper": 9.85,
      "signal": "stable",
      "label": "13 มกราคม 2570"
    },
    {
      "date": "2027-01-14",
      "day": 14,
      "price": 8.59,
      "lower": 7.32,
      "upper": 9.86,
      "signal": "stable",
      "label": "14 มกราคม 2570"
    },
    {
      "date": "2027-01-15",
      "day": 15,
      "price": 8.6,
      "lower": 7.33,
      "upper": 9.87,
      "signal": "stable",
      "label": "15 มกราคม 2570"
    },
    {
      "date": "2027-01-16",
      "day": 16,
      "price": 8.6,
      "lower": 7.33,
      "upper": 9.87,
      "signal": "stable",
      "label": "16 มกราคม 2570"
    },
    {
      "date": "2027-01-17",
      "day": 17,
      "price": 8.61,
      "lower": 7.34,
      "upper": 9.88,
      "signal": "stable",
      "label": "17 มกราคม 2570"
    },
    {
      "date": "2027-01-18",
      "day": 18,
      "price": 8.62,
      "lower": 7.35,
      "upper": 9.89,
      "signal": "stable",
      "label": "18 มกราคม 2570"
    },
    {
      "date": "2027-01-19",
      "day": 19,
      "price": 8.63,
      "lower": 7.35,
      "upper": 9.91,
      "signal": "stable",
      "label": "19 มกราคม 2570"
    },
    {
      "date": "2027-01-20",
      "day": 20,
      "price": 8.63,
      "lower": 7.35,
      "upper": 9.91,
      "signal": "stable",
      "label": "20 มกราคม 2570"
    },
    {
      "date": "2027-01-21",
      "day": 21,
      "price": 8.64,
      "lower": 7.36,
      "upper": 9.92,
      "signal": "stable",
      "label": "21 มกราคม 2570"
    },
    {
      "date": "2027-01-22",
      "day": 22,
      "price": 8.64,
      "lower": 7.36,
      "upper": 9.92,
      "signal": "stable",
      "label": "22 มกราคม 2570"
    },
    {
      "date": "2027-01-23",
      "day": 23,
      "price": 8.64,
      "lower": 7.36,
      "upper": 9.92,
      "signal": "stable",
      "label": "23 มกราคม 2570"
    },
    {
      "date": "2027-01-24",
      "day": 24,
      "price": 8.65,
      "lower": 7.36,
      "upper": 9.94,
      "signal": "stable",
      "label": "24 มกราคม 2570"
    },
    {
      "date": "2027-01-25",
      "day": 25,
      "price": 8.66,
      "lower": 7.37,
      "upper": 9.95,
      "signal": "stable",
      "label": "25 มกราคม 2570"
    },
    {
      "date": "2027-01-26",
      "day": 26,
      "price": 8.66,
      "lower": 7.37,
      "upper": 9.95,
      "signal": "stable",
      "label": "26 มกราคม 2570"
    },
    {
      "date": "2027-01-27",
      "day": 27,
      "price": 8.67,
      "lower": 7.38,
      "upper": 9.96,
      "signal": "stable",
      "label": "27 มกราคม 2570"
    },
    {
      "date": "2027-01-28",
      "day": 28,
      "price": 8.67,
      "lower": 7.38,
      "upper": 9.96,
      "signal": "stable",
      "label": "28 มกราคม 2570"
    },
    {
      "date": "2027-01-29",
      "day": 29,
      "price": 8.67,
      "lower": 7.37,
      "upper": 9.97,
      "signal": "stable",
      "label": "29 มกราคม 2570"
    },
    {
      "date": "2027-01-30",
      "day": 30,
      "price": 8.58,
      "lower": 7.28,
      "upper": 9.88,
      "signal": "stable",
      "label": "30 มกราคม 2570"
    },
    {
      "date": "2027-01-31",
      "day": 31,
      "price": 8.5,
      "lower": 7.2,
      "upper": 9.8,
      "signal": "stable",
      "label": "31 มกราคม 2570"
    },
    {
      "date": "2027-02-01",
      "day": 1,
      "price": 8.41,
      "lower": 7.11,
      "upper": 9.71,
      "signal": "stable",
      "label": "1 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-02",
      "day": 2,
      "price": 8.33,
      "lower": 7.03,
      "upper": 9.63,
      "signal": "stable",
      "label": "2 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-03",
      "day": 3,
      "price": 8.24,
      "lower": 6.93,
      "upper": 9.55,
      "signal": "stable",
      "label": "3 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-04",
      "day": 4,
      "price": 8.24,
      "lower": 6.93,
      "upper": 9.55,
      "signal": "stable",
      "label": "4 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-05",
      "day": 5,
      "price": 8.24,
      "lower": 6.93,
      "upper": 9.55,
      "signal": "stable",
      "label": "5 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-06",
      "day": 6,
      "price": 8.24,
      "lower": 6.93,
      "upper": 9.55,
      "signal": "stable",
      "label": "6 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-07",
      "day": 7,
      "price": 8.24,
      "lower": 6.93,
      "upper": 9.55,
      "signal": "stable",
      "label": "7 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-08",
      "day": 8,
      "price": 8.24,
      "lower": 6.92,
      "upper": 9.56,
      "signal": "stable",
      "label": "8 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-09",
      "day": 9,
      "price": 8.24,
      "lower": 6.92,
      "upper": 9.56,
      "signal": "stable",
      "label": "9 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-10",
      "day": 10,
      "price": 8.24,
      "lower": 6.92,
      "upper": 9.56,
      "signal": "stable",
      "label": "10 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-11",
      "day": 11,
      "price": 8.23,
      "lower": 6.91,
      "upper": 9.55,
      "signal": "stable",
      "label": "11 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-12",
      "day": 12,
      "price": 8.23,
      "lower": 6.91,
      "upper": 9.55,
      "signal": "stable",
      "label": "12 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-13",
      "day": 13,
      "price": 8.23,
      "lower": 6.9,
      "upper": 9.56,
      "signal": "stable",
      "label": "13 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-14",
      "day": 14,
      "price": 8.22,
      "lower": 6.89,
      "upper": 9.55,
      "signal": "stable",
      "label": "14 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-15",
      "day": 15,
      "price": 8.22,
      "lower": 6.89,
      "upper": 9.55,
      "signal": "stable",
      "label": "15 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-16",
      "day": 16,
      "price": 8.22,
      "lower": 6.89,
      "upper": 9.55,
      "signal": "stable",
      "label": "16 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-17",
      "day": 17,
      "price": 8.22,
      "lower": 6.89,
      "upper": 9.55,
      "signal": "stable",
      "label": "17 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-18",
      "day": 18,
      "price": 8.21,
      "lower": 6.87,
      "upper": 9.55,
      "signal": "stable",
      "label": "18 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-19",
      "day": 19,
      "price": 8.2,
      "lower": 6.86,
      "upper": 9.54,
      "signal": "stable",
      "label": "19 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-20",
      "day": 20,
      "price": 8.19,
      "lower": 6.85,
      "upper": 9.53,
      "signal": "stable",
      "label": "20 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-21",
      "day": 21,
      "price": 8.19,
      "lower": 6.85,
      "upper": 9.53,
      "signal": "stable",
      "label": "21 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-22",
      "day": 22,
      "price": 8.18,
      "lower": 6.84,
      "upper": 9.52,
      "signal": "stable",
      "label": "22 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-23",
      "day": 23,
      "price": 8.17,
      "lower": 6.82,
      "upper": 9.52,
      "signal": "stable",
      "label": "23 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-24",
      "day": 24,
      "price": 8.16,
      "lower": 6.81,
      "upper": 9.51,
      "signal": "stable",
      "label": "24 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-25",
      "day": 25,
      "price": 8.15,
      "lower": 6.8,
      "upper": 9.5,
      "signal": "stable",
      "label": "25 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-26",
      "day": 26,
      "price": 8.14,
      "lower": 6.79,
      "upper": 9.49,
      "signal": "stable",
      "label": "26 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-27",
      "day": 27,
      "price": 8.08,
      "lower": 6.73,
      "upper": 9.43,
      "signal": "stable",
      "label": "27 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-02-28",
      "day": 28,
      "price": 8.02,
      "lower": 6.66,
      "upper": 9.38,
      "signal": "stable",
      "label": "28 กุมภาพันธ์ 2570"
    },
    {
      "date": "2027-03-01",
      "day": 1,
      "price": 7.97,
      "lower": 6.61,
      "upper": 9.33,
      "signal": "high",
      "label": "1 มีนาคม 2570"
    },
    {
      "date": "2027-03-02",
      "day": 2,
      "price": 7.91,
      "lower": 6.55,
      "upper": 9.27,
      "signal": "stable",
      "label": "2 มีนาคม 2570"
    },
    {
      "date": "2027-03-03",
      "day": 3,
      "price": 7.85,
      "lower": 6.49,
      "upper": 9.21,
      "signal": "stable",
      "label": "3 มีนาคม 2570"
    },
    {
      "date": "2027-03-04",
      "day": 4,
      "price": 7.83,
      "lower": 6.47,
      "upper": 9.19,
      "signal": "stable",
      "label": "4 มีนาคม 2570"
    },
    {
      "date": "2027-03-05",
      "day": 5,
      "price": 7.81,
      "lower": 6.44,
      "upper": 9.18,
      "signal": "stable",
      "label": "5 มีนาคม 2570"
    },
    {
      "date": "2027-03-06",
      "day": 6,
      "price": 7.8,
      "lower": 6.43,
      "upper": 9.17,
      "signal": "stable",
      "label": "6 มีนาคม 2570"
    },
    {
      "date": "2027-03-07",
      "day": 7,
      "price": 7.78,
      "lower": 6.41,
      "upper": 9.15,
      "signal": "stable",
      "label": "7 มีนาคม 2570"
    },
    {
      "date": "2027-03-08",
      "day": 8,
      "price": 7.77,
      "lower": 6.4,
      "upper": 9.14,
      "signal": "stable",
      "label": "8 มีนาคม 2570"
    },
    {
      "date": "2027-03-09",
      "day": 9,
      "price": 7.76,
      "lower": 6.39,
      "upper": 9.13,
      "signal": "stable",
      "label": "9 มีนาคม 2570"
    },
    {
      "date": "2027-03-10",
      "day": 10,
      "price": 7.74,
      "lower": 6.36,
      "upper": 9.12,
      "signal": "stable",
      "label": "10 มีนาคม 2570"
    },
    {
      "date": "2027-03-11",
      "day": 11,
      "price": 7.72,
      "lower": 6.34,
      "upper": 9.1,
      "signal": "stable",
      "label": "11 มีนาคม 2570"
    },
    {
      "date": "2027-03-12",
      "day": 12,
      "price": 7.7,
      "lower": 6.32,
      "upper": 9.08,
      "signal": "stable",
      "label": "12 มีนาคม 2570"
    },
    {
      "date": "2027-03-13",
      "day": 13,
      "price": 7.68,
      "lower": 6.3,
      "upper": 9.06,
      "signal": "stable",
      "label": "13 มีนาคม 2570"
    },
    {
      "date": "2027-03-14",
      "day": 14,
      "price": 7.66,
      "lower": 6.28,
      "upper": 9.04,
      "signal": "stable",
      "label": "14 มีนาคม 2570"
    },
    {
      "date": "2027-03-15",
      "day": 15,
      "price": 7.65,
      "lower": 6.26,
      "upper": 9.04,
      "signal": "stable",
      "label": "15 มีนาคม 2570"
    },
    {
      "date": "2027-03-16",
      "day": 16,
      "price": 7.63,
      "lower": 6.24,
      "upper": 9.02,
      "signal": "stable",
      "label": "16 มีนาคม 2570"
    },
    {
      "date": "2027-03-17",
      "day": 17,
      "price": 7.61,
      "lower": 6.22,
      "upper": 9,
      "signal": "stable",
      "label": "17 มีนาคม 2570"
    },
    {
      "date": "2027-03-18",
      "day": 18,
      "price": 7.59,
      "lower": 6.2,
      "upper": 8.98,
      "signal": "stable",
      "label": "18 มีนาคม 2570"
    },
    {
      "date": "2027-03-19",
      "day": 19,
      "price": 7.56,
      "lower": 6.17,
      "upper": 8.95,
      "signal": "stable",
      "label": "19 มีนาคม 2570"
    },
    {
      "date": "2027-03-20",
      "day": 20,
      "price": 7.54,
      "lower": 6.14,
      "upper": 8.94,
      "signal": "stable",
      "label": "20 มีนาคม 2570"
    },
    {
      "date": "2027-03-21",
      "day": 21,
      "price": 7.52,
      "lower": 6.12,
      "upper": 8.92,
      "signal": "stable",
      "label": "21 มีนาคม 2570"
    },
    {
      "date": "2027-03-22",
      "day": 22,
      "price": 7.5,
      "lower": 6.1,
      "upper": 8.9,
      "signal": "stable",
      "label": "22 มีนาคม 2570"
    },
    {
      "date": "2027-03-23",
      "day": 23,
      "price": 7.48,
      "lower": 6.08,
      "upper": 8.88,
      "signal": "stable",
      "label": "23 มีนาคม 2570"
    },
    {
      "date": "2027-03-24",
      "day": 24,
      "price": 7.46,
      "lower": 6.06,
      "upper": 8.86,
      "signal": "stable",
      "label": "24 มีนาคม 2570"
    },
    {
      "date": "2027-03-25",
      "day": 25,
      "price": 7.44,
      "lower": 6.03,
      "upper": 8.85,
      "signal": "stable",
      "label": "25 มีนาคม 2570"
    },
    {
      "date": "2027-03-26",
      "day": 26,
      "price": 7.41,
      "lower": 6,
      "upper": 8.82,
      "signal": "stable",
      "label": "26 มีนาคม 2570"
    },
    {
      "date": "2027-03-27",
      "day": 27,
      "price": 7.39,
      "lower": 5.98,
      "upper": 8.8,
      "signal": "stable",
      "label": "27 มีนาคม 2570"
    },
    {
      "date": "2027-03-28",
      "day": 28,
      "price": 7.37,
      "lower": 5.96,
      "upper": 8.78,
      "signal": "stable",
      "label": "28 มีนาคม 2570"
    },
    {
      "date": "2027-03-29",
      "day": 29,
      "price": 7.35,
      "lower": 5.94,
      "upper": 8.76,
      "signal": "stable",
      "label": "29 มีนาคม 2570"
    },
    {
      "date": "2027-03-30",
      "day": 30,
      "price": 7.37,
      "lower": 5.95,
      "upper": 8.79,
      "signal": "stable",
      "label": "30 มีนาคม 2570"
    },
    {
      "date": "2027-03-31",
      "day": 31,
      "price": 7.39,
      "lower": 5.97,
      "upper": 8.81,
      "signal": "stable",
      "label": "31 มีนาคม 2570"
    },
    {
      "date": "2027-04-01",
      "day": 1,
      "price": 7.41,
      "lower": 5.99,
      "upper": 8.83,
      "signal": "stable",
      "label": "1 เมษายน 2570"
    },
    {
      "date": "2027-04-02",
      "day": 2,
      "price": 7.43,
      "lower": 6.01,
      "upper": 8.85,
      "signal": "stable",
      "label": "2 เมษายน 2570"
    },
    {
      "date": "2027-04-03",
      "day": 3,
      "price": 7.46,
      "lower": 6.04,
      "upper": 8.88,
      "signal": "stable",
      "label": "3 เมษายน 2570"
    },
    {
      "date": "2027-04-04",
      "day": 4,
      "price": 7.43,
      "lower": 6,
      "upper": 8.86,
      "signal": "stable",
      "label": "4 เมษายน 2570"
    },
    {
      "date": "2027-04-05",
      "day": 5,
      "price": 7.41,
      "lower": 5.98,
      "upper": 8.84,
      "signal": "stable",
      "label": "5 เมษายน 2570"
    },
    {
      "date": "2027-04-06",
      "day": 6,
      "price": 7.39,
      "lower": 5.96,
      "upper": 8.82,
      "signal": "stable",
      "label": "6 เมษายน 2570"
    },
    {
      "date": "2027-04-07",
      "day": 7,
      "price": 7.37,
      "lower": 5.94,
      "upper": 8.8,
      "signal": "stable",
      "label": "7 เมษายน 2570"
    },
    {
      "date": "2027-04-08",
      "day": 8,
      "price": 7.34,
      "lower": 5.91,
      "upper": 8.77,
      "signal": "stable",
      "label": "8 เมษายน 2570"
    },
    {
      "date": "2027-04-09",
      "day": 9,
      "price": 7.32,
      "lower": 5.88,
      "upper": 8.76,
      "signal": "stable",
      "label": "9 เมษายน 2570"
    },
    {
      "date": "2027-04-10",
      "day": 10,
      "price": 7.3,
      "lower": 5.86,
      "upper": 8.74,
      "signal": "stable",
      "label": "10 เมษายน 2570"
    },
    {
      "date": "2027-04-11",
      "day": 11,
      "price": 7.28,
      "lower": 5.84,
      "upper": 8.72,
      "signal": "stable",
      "label": "11 เมษายน 2570"
    },
    {
      "date": "2027-04-12",
      "day": 12,
      "price": 7.26,
      "lower": 5.82,
      "upper": 8.7,
      "signal": "stable",
      "label": "12 เมษายน 2570"
    },
    {
      "date": "2027-04-13",
      "day": 13,
      "price": 7.24,
      "lower": 5.8,
      "upper": 8.68,
      "signal": "stable",
      "label": "13 เมษายน 2570"
    },
    {
      "date": "2027-04-14",
      "day": 14,
      "price": 7.22,
      "lower": 5.77,
      "upper": 8.67,
      "signal": "stable",
      "label": "14 เมษายน 2570"
    },
    {
      "date": "2027-04-15",
      "day": 15,
      "price": 7.19,
      "lower": 5.74,
      "upper": 8.64,
      "signal": "stable",
      "label": "15 เมษายน 2570"
    },
    {
      "date": "2027-04-16",
      "day": 16,
      "price": 7.17,
      "lower": 5.72,
      "upper": 8.62,
      "signal": "stable",
      "label": "16 เมษายน 2570"
    },
    {
      "date": "2027-04-17",
      "day": 17,
      "price": 7.15,
      "lower": 5.7,
      "upper": 8.6,
      "signal": "stable",
      "label": "17 เมษายน 2570"
    },
    {
      "date": "2027-04-18",
      "day": 18,
      "price": 7.13,
      "lower": 5.68,
      "upper": 8.58,
      "signal": "stable",
      "label": "18 เมษายน 2570"
    },
    {
      "date": "2027-04-19",
      "day": 19,
      "price": 7.11,
      "lower": 5.65,
      "upper": 8.57,
      "signal": "stable",
      "label": "19 เมษายน 2570"
    },
    {
      "date": "2027-04-20",
      "day": 20,
      "price": 7.1,
      "lower": 5.64,
      "upper": 8.56,
      "signal": "stable",
      "label": "20 เมษายน 2570"
    },
    {
      "date": "2027-04-21",
      "day": 21,
      "price": 7.08,
      "lower": 5.62,
      "upper": 8.54,
      "signal": "stable",
      "label": "21 เมษายน 2570"
    },
    {
      "date": "2027-04-22",
      "day": 22,
      "price": 7.06,
      "lower": 5.6,
      "upper": 8.52,
      "signal": "stable",
      "label": "22 เมษายน 2570"
    },
    {
      "date": "2027-04-23",
      "day": 23,
      "price": 7.04,
      "lower": 5.58,
      "upper": 8.5,
      "signal": "stable",
      "label": "23 เมษายน 2570"
    },
    {
      "date": "2027-04-24",
      "day": 24,
      "price": 7.02,
      "lower": 5.55,
      "upper": 8.49,
      "signal": "stable",
      "label": "24 เมษายน 2570"
    },
    {
      "date": "2027-04-25",
      "day": 25,
      "price": 7,
      "lower": 5.53,
      "upper": 8.47,
      "signal": "stable",
      "label": "25 เมษายน 2570"
    },
    {
      "date": "2027-04-26",
      "day": 26,
      "price": 6.99,
      "lower": 5.52,
      "upper": 8.46,
      "signal": "stable",
      "label": "26 เมษายน 2570"
    },
    {
      "date": "2027-04-27",
      "day": 27,
      "price": 6.97,
      "lower": 5.5,
      "upper": 8.44,
      "signal": "stable",
      "label": "27 เมษายน 2570"
    },
    {
      "date": "2027-04-28",
      "day": 28,
      "price": 6.96,
      "lower": 5.49,
      "upper": 8.43,
      "signal": "stable",
      "label": "28 เมษายน 2570"
    },
    {
      "date": "2027-04-29",
      "day": 29,
      "price": 6.99,
      "lower": 5.51,
      "upper": 8.47,
      "signal": "stable",
      "label": "29 เมษายน 2570"
    },
    {
      "date": "2027-04-30",
      "day": 30,
      "price": 7.02,
      "lower": 5.54,
      "upper": 8.5,
      "signal": "stable",
      "label": "30 เมษายน 2570"
    },
    {
      "date": "2027-05-01",
      "day": 1,
      "price": 7.05,
      "lower": 5.57,
      "upper": 8.53,
      "signal": "stable",
      "label": "1 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-02",
      "day": 2,
      "price": 7.08,
      "lower": 5.6,
      "upper": 8.56,
      "signal": "stable",
      "label": "2 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-03",
      "day": 3,
      "price": 7.11,
      "lower": 5.63,
      "upper": 8.59,
      "signal": "stable",
      "label": "3 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-04",
      "day": 4,
      "price": 7.1,
      "lower": 5.61,
      "upper": 8.59,
      "signal": "stable",
      "label": "4 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-05",
      "day": 5,
      "price": 7.09,
      "lower": 5.6,
      "upper": 8.58,
      "signal": "stable",
      "label": "5 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-06",
      "day": 6,
      "price": 7.08,
      "lower": 5.59,
      "upper": 8.57,
      "signal": "stable",
      "label": "6 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-07",
      "day": 7,
      "price": 7.07,
      "lower": 5.58,
      "upper": 8.56,
      "signal": "stable",
      "label": "7 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-08",
      "day": 8,
      "price": 7.05,
      "lower": 5.56,
      "upper": 8.54,
      "signal": "stable",
      "label": "8 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-09",
      "day": 9,
      "price": 7.05,
      "lower": 5.55,
      "upper": 8.55,
      "signal": "stable",
      "label": "9 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-10",
      "day": 10,
      "price": 7.04,
      "lower": 5.54,
      "upper": 8.54,
      "signal": "stable",
      "label": "10 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-11",
      "day": 11,
      "price": 7.03,
      "lower": 5.53,
      "upper": 8.53,
      "signal": "stable",
      "label": "11 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-12",
      "day": 12,
      "price": 7.03,
      "lower": 5.53,
      "upper": 8.53,
      "signal": "stable",
      "label": "12 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-13",
      "day": 13,
      "price": 7.02,
      "lower": 5.52,
      "upper": 8.52,
      "signal": "stable",
      "label": "13 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-14",
      "day": 14,
      "price": 7.01,
      "lower": 5.5,
      "upper": 8.52,
      "signal": "stable",
      "label": "14 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-15",
      "day": 15,
      "price": 7,
      "lower": 5.49,
      "upper": 8.51,
      "signal": "stable",
      "label": "15 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-16",
      "day": 16,
      "price": 7,
      "lower": 5.49,
      "upper": 8.51,
      "signal": "stable",
      "label": "16 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-17",
      "day": 17,
      "price": 6.99,
      "lower": 5.48,
      "upper": 8.5,
      "signal": "stable",
      "label": "17 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-18",
      "day": 18,
      "price": 6.99,
      "lower": 5.48,
      "upper": 8.5,
      "signal": "stable",
      "label": "18 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-19",
      "day": 19,
      "price": 6.98,
      "lower": 5.46,
      "upper": 8.5,
      "signal": "stable",
      "label": "19 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-20",
      "day": 20,
      "price": 6.98,
      "lower": 5.46,
      "upper": 8.5,
      "signal": "stable",
      "label": "20 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-21",
      "day": 21,
      "price": 6.97,
      "lower": 5.45,
      "upper": 8.49,
      "signal": "stable",
      "label": "21 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-22",
      "day": 22,
      "price": 6.97,
      "lower": 5.45,
      "upper": 8.49,
      "signal": "stable",
      "label": "22 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-23",
      "day": 23,
      "price": 6.97,
      "lower": 5.45,
      "upper": 8.49,
      "signal": "stable",
      "label": "23 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-24",
      "day": 24,
      "price": 6.97,
      "lower": 5.44,
      "upper": 8.5,
      "signal": "stable",
      "label": "24 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-25",
      "day": 25,
      "price": 6.97,
      "lower": 5.44,
      "upper": 8.5,
      "signal": "stable",
      "label": "25 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-26",
      "day": 26,
      "price": 6.97,
      "lower": 5.44,
      "upper": 8.5,
      "signal": "stable",
      "label": "26 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-27",
      "day": 27,
      "price": 6.96,
      "lower": 5.43,
      "upper": 8.49,
      "signal": "stable",
      "label": "27 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-28",
      "day": 28,
      "price": 6.96,
      "lower": 5.43,
      "upper": 8.49,
      "signal": "stable",
      "label": "28 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-29",
      "day": 29,
      "price": 6.96,
      "lower": 5.42,
      "upper": 8.5,
      "signal": "stable",
      "label": "29 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-30",
      "day": 30,
      "price": 6.96,
      "lower": 5.42,
      "upper": 8.5,
      "signal": "stable",
      "label": "30 พฤษภาคม 2570"
    },
    {
      "date": "2027-05-31",
      "day": 31,
      "price": 6.96,
      "lower": 5.42,
      "upper": 8.5,
      "signal": "stable",
      "label": "31 พฤษภาคม 2570"
    }
  ]
};
