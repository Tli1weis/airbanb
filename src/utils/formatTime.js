import dayjs from "dayjs";
export default function formatTime(time){
    return dayjs(time).format('MM月DD日')
}