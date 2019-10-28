import dayjs from "dayjs";
const todayKr = dayjs()
  .add(9, "hour")
  .valueOf();
export default todayKr;
