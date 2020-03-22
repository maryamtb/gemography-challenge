import * as moment from "moment";

const getTimeInterval = () => {
  let minus30 = new Date();
  minus30 = moment()
    .subtract(30, "days").format('YYYY-MM-DD');
  return minus30;
};

export default getTimeInterval;