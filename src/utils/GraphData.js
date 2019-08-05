import dayjs from 'dayjs';
const today = Math.floor(Math.random() * (400) + 100);
const graphdata = [
        {
            id:1,
            date: dayjs().subtract(5, 'day').format('MM.DD'),
            time: '9시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 2,
            date: dayjs().subtract(5, 'day').format('MM.DD'),
            time: '12시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 3,
            date: dayjs().subtract(5, 'day').format('MM.DD'),
            time: '18시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 4,
            date: dayjs().subtract(4, 'day').format('MM.DD'),
            time: '9시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 5,
            date: dayjs().subtract(4, 'day').format('MM.DD'),
            time: '12시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 6,
            date: dayjs().subtract(4, 'day').format('MM.DD'),
            time: '18시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 7,
            date: dayjs().subtract(3, 'day').format('MM.DD'),
            time: '9시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 8,
            date: dayjs().subtract(3, 'day').format('MM.DD'),
            time: '12시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
            id: 9,
            date: dayjs().subtract(3, 'day').format('MM.DD'),
            time: '18시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 10,
            date: dayjs().subtract(2, 'day').format('MM.DD'),
            time: '9시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 11,
            date: dayjs().subtract(2, 'day').format('MM.DD'),
            time: '12시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 12,
            date: dayjs().subtract(2, 'day').format('MM.DD'),
            time: '18시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 13,
            date: dayjs().subtract(1, 'day').format('MM.DD'),
            time: '9시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 14,
            date: dayjs().subtract(1, 'day').format('MM.DD'),
            time: '12시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 15,
            date: dayjs().subtract(1, 'day').format('MM.DD'),
            time: '18시', sugar: Math.floor(Math.random() * (400) + 100),
        },
        {
             id: 16,
            date: dayjs().format('MM.DD'),
            time: '9시', sugar:today, fsugar:today
        },
        {
             id: 17,
            date: dayjs().format('MM.DD'),
            time: '12시', fsugar: Math.floor(Math.random() * (400) + 100)
        },
        {
            id: 18,
            date: dayjs().format('MM.DD'),
            time: '18시', fsugar: Math.floor(Math.random() * (400) + 100)
        },
        {
             id: 19,
            date: dayjs().add(1, 'day').format('MM.DD'),
            time: '9시', fsugar: Math.floor(Math.random() * (400) + 100)
        },
        {
             id: 20,
            date: dayjs().add(1, 'day').format('MM.DD'),
            time: '12시', fsugar: Math.floor(Math.random() * (400) + 100)
        },
        {
             id: 21,
            date: dayjs().add(1, 'day').format('MM.DD'),
            time: '18시', fsugar: Math.floor(Math.random() * (400) + 100)
        },
        {
             id: 22,
            date: dayjs().add(2, 'day').format('MM.DD'),
            time: '9시', fsugar: Math.floor(Math.random() * (400) + 100)
        }, 
        {
             id: 23,
            date: dayjs().add(2, 'day').format('MM.DD'),
            time: '12시', fsugar: Math.floor(Math.random() * (400) + 100)
        }, 
        {
             id: 24,
            date: dayjs().add(2, 'day').format('MM.DD'),
            time: '18시', fsugar: Math.floor(Math.random() * (400) + 100)
        }
]
export default graphdata;