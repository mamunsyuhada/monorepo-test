import "dayjs/locale/id";

import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import isToday from "dayjs/plugin/isToday";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(duration);
dayjs.locale("id");

dayjs.tz.setDefault("Asia/Jakarta");

const timezonedDayjs = (...args: any[]) => {
  return dayjs(...args).tz();
};

const timezonedUnix = (value: number) => {
  return dayjs.unix(value).tz();
};

timezonedDayjs.unix = timezonedUnix;
timezonedDayjs.duration = dayjs.duration;

export { Dayjs, timezonedDayjs as dayjs };
