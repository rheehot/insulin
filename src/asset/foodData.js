import { getTimeStamp, getRandomVal } from "../utils";

const foodData = [
  {
    day: 1,
    date: getTimeStamp("sub", 7, 4),
    time: "7시",
    status: "간식",
    name: "딸기우유 1개",
    // kcal: getRandomVal(500, 900)
    kcal: 150
  },
  {
    day: 1,
    date: getTimeStamp("sub", 9, 4),
    status: "",
    name: "",
    time: "9시",
    kcal: 500
  },
  {
    day: 1,
    date: getTimeStamp("sub", 14, 4),
    status: "",
    name: "",
    time: "14시",
    kcal: 500
  },
  {
    day: 1,
    date: getTimeStamp("sub", 20, 4),
    status: "",
    name: "",
    time: "20시",
    kcal: 500
  },
  {
    day: 2,
    date: getTimeStamp("sub", 9, 3),
    status: "",
    name: "",
    time: "9시",
    kcal: 500
  },
  {
    day: 2,
    date: getTimeStamp("sub", 14, 3),
    status: "",
    name: "",
    time: "14시",
    kcal: 500
  },
  {
    day: 2,
    date: getTimeStamp("sub", 20, 3),
    status: "",
    name: "",
    time: "20시",
    kcal: 500
  },
  {
    day: 2,
    date: getTimeStamp("sub", 7, 3),
    time: "7시",
    status: "간식",
    name: "토마토주스 1/2개",
    kcal: 42
  },
  {
    day: 2,
    date: getTimeStamp("sub", 18, 3),
    time: "18시",
    status: "간식",
    name: "베이글 1개",
    kcal: 195
  },
  {
    day: 3,
    date: getTimeStamp("sub", 9, 2),
    status: "",
    name: "",
    time: "9시",
    kcal: 500
  },
  {
    day: 3,
    date: getTimeStamp("sub", 14, 2),
    status: "",
    name: "",
    time: "14시",
    kcal: 500
  },
  {
    day: 3,
    date: getTimeStamp("sub", 12, 2),
    status: "간식",
    time: "12시",
    name: "호떡 1개",
    kcal: 326
  },
  {
    day: 3,
    date: getTimeStamp("sub", 20, 2),
    time: "20시",
    status: "",
    name: "",
    kcal: 500
  },
  {
    day: 4,
    date: getTimeStamp("sub", 7, 1),
    status: "간식",
    name: "팥빵 1개",
    time: "7시",
    kcal: 252
  },
  {
    day: 4,
    date: getTimeStamp("sub", 9, 1),
    status: "",
    name: "",
    time: "9시",
    kcal: 500
  },
  {
    day: 4,
    date: getTimeStamp("sub", 14, 1),
    status: "",
    name: "",
    time: "14시",
    kcal: 500
  },
  {
    day: 4,
    date: getTimeStamp("sub", 20, 1),
    status: "",
    name: "",
    time: "20시",
    kcal: 500
  },
  {
    day: 5,
    date: getTimeStamp("none", 9),
    status: "",
    name: "",
    time: "9시",
    kcal: 500
  },
  {
    day: 5,
    date: getTimeStamp("none", 14),
    status: "",
    name: "",
    time: "14시",
    kcal: 500
  },
  {
    day: 5,
    date: getTimeStamp("none", 20),
    status: "",
    name: "",
    time: "20시",
    kcal: 500
  },
  {
    day: 5,
    date: getTimeStamp("none", 18),
    status: "간식",
    name: "머핀 1개",
    time: "18시",
    kcal: 212
  }
];

export default foodData;
