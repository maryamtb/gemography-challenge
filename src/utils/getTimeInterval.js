import * as moment from "moment";

const getTimeInterval = () => {
  let minus30 = new Date();
  minus30 = moment()
    .subtract(30, "days")
  return minus30;
};

export default getTimeInterval;