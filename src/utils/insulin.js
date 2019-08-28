import dayjs from 'dayjs';
const insulin = [{
        id: 1,
        date: dayjs().subtract(5, 'day').format('MM.DD'),
        time: 20,
        sugar: 100,
    },
    {
        id: 2,
        date: dayjs().subtract(4, 'day').format('MM.DD'),
        time: 60,
        sugar: 100,
    },
    {
        id: 3,
        date: dayjs().subtract(3, 'day').format('MM.DD'),
        time: 150,
        sugar: 100,
    },
    {
        id: 4,
        date: dayjs().subtract(2, 'day').format('MM.DD'),
        time: 30,
        sugar: 20,
    },
    {
        id: 5,
        date: dayjs().subtract(1, 'day').format('MM.DD'),
        time: 90,
        sugar: 20,
    },
     {
         id: 6,
         date: dayjs().format('MM.DD'),
         time: 180,
         sugar: 20,
     },
        {
             id: 7,
            date: dayjs().add(1, 'day').format('MM.DD'),
            time: 150, sugar: 20
        }, 
        {
            id: 8,
            date: dayjs().add(2, 'day').format('MM.DD'),
            time: 150,
            sugar: 20
        },
        {
             id: 9,
            date: dayjs().add(3, 'day').format('MM.DD'),
            time: 150, sugar: 20
        }, 
    
]
export default insulin;