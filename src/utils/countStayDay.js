import dayjs from "dayjs";

export default function countStayDay(end,start){
    return dayjs(end).diff(start,'day')
}