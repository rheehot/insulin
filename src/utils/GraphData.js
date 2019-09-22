import dayjs from "dayjs";
import getTimeStamp from "./getTimStamp";

const todayKr = dayjs()
  .add(9, "hour")
  .valueOf();
function getRandomSugar(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const graphdata = [
  {
    day: 2,
    date: getTimeStamp("sub", 5, 4),
    time: "5시",
    status: "공복",
    sugar: getRandomSugar(50, 200)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 9, 4),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 14, 4),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 20, 4),
    time: "20시",
    status: "저녁 식후",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 5, 3),
    time: "5시",
    status: "공복",
    sugar: getRandomSugar(50, 200)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 9, 3),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 14, 3),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 20, 3),
    time: "20시",
    status: "저녁 식후",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 5, 2),
    time: "5시",
    status: "공복",
    sugar: getRandomSugar(50, 200)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 9, 2),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 14, 2),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 20, 2),
    status: "저녁 식후",
    time: "20시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 5,
    date: getTimeStamp("sub", 5, 1),
    time: "5시",
    status: "공복",
    sugar: getRandomSugar(50, 200)
  },
  {
    day: 5,
    date: getTimeStamp("sub", 9, 1),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 5,
    date: getTimeStamp("sub", 14, 1),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 5,
    date: getTimeStamp("sub", 20, 1),
    status: "저녁 식후",
    time: "20시",
    sugar: getRandomSugar(100, 500)
  },

  {
    day: 6,
    date: getTimeStamp("none", 5),
    time: "5시",
    status: "공복",
    sugar: getRandomSugar(50, 200)
  },
  {
    day: 6,
    date: getTimeStamp("none", 9),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 6,
    date: getTimeStamp("none", 14),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 6,
    date: getTimeStamp("none", 20),
    status: "저녁 식후",
    time: "20시",
    sugar: getRandomSugar(100, 500)
  },
  {
    day: 7,
    date: getTimeStamp("add", 9, 1),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 400)
  },
  {
    day: 7,
    date: getTimeStamp("add", 14, 1),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 400)
  },
  {
    day: 7,
    date: getTimeStamp("add", 20, 1),
    status: "저녁 식후",
    time: "20시",
    sugar: getRandomSugar(100, 400)
  },
  {
    day: 8,
    date: getTimeStamp("add", 9, 2),
    status: "아침 식후",
    time: "9시",
    sugar: getRandomSugar(100, 400)
  },
  {
    day: 8,
    date: getTimeStamp("add", 14, 2),
    status: "점심 식후",
    time: "14시",
    sugar: getRandomSugar(100, 400)
  },
  {
    day: 8,
    date: getTimeStamp("add", 20, 2),
    status: "저녁 식후",
    time: "20시",
    sugar: getRandomSugar(100, 400)
  }
];

export { todayKr, graphdata, getRandomSugar };
