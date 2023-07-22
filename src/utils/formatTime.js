import dayjs from "dayjs";
export default function formatTime(time,format='MM月DD日'){
    return dayjs(time).format(format)
}