import dayjs from 'dayjs'
export default function getTimeStamp(operator,time,offset){
    return{
        sub: dayjs().subtract(offset, 'day').hour(time+9).minute(0).second(0).valueOf(),
        add: dayjs().add(offset, 'day').hour(time+9).minute(0).second(0).valueOf(),
        none: dayjs().hour(time+9).minute(0).second(0).valueOf(),
    }[operator]
}