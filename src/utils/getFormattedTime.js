import * as moment from "moment";

const getFormattedTime = (value) => {
  let time = new Date();
  time = moment(value, "YYYYMMDD").fromNow();
  return time;
};

export default getFormattedTime;