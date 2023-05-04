/*const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId.name || 'ID {futureId} not created yet')

copied = holidays.christmas
copied = { name: 'X-mas Day' }
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log('{firstDay}/{firstMonth}/{currentYear}')
console.log('{lastDay}/{lastMonth}/{currentYear}')

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)*/


const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment
const copyDate = new Date(holidays[0].date)   //copy of first date created but formatted sing a date()

console.log(holidays[futureId] ? holidays[futureId] : `ID ${futureId} not created yet`)

const originalDate = holidays[6].date  //christmas property created so that it may be edited as desired
const copied = holidays[christmas]

copied.date = new Date(`25 December ${currentYear}`)
copied.name = 'X-Mas' 


    const correctDate = copied.date
    correctDate.hours = 0
    correctDate.minutes = 0

isEarlier = copied.date < originalDate

console.log('New date is earlier:', isEarlier)

    if (isEarlier) copied.date = correctDate


let padDate = (copied.date.getDate()).toString()
padDate = padDate.padStart(2, '0')  

console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || padDate + '/'
                + (copied.date.getMonth() + 1)+'/'+copied.date.getFullYear())

const firstHolidayTimestamp = new Date(Math.min(
    copyDate,    // holidays[0].date replaced with properly formatted date
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
))

const lastHolidayTimestamp = new Date(Math.max(
    copyDate,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
))

const firstDay = ((firstHolidayTimestamp.getDate().toString())).padStart(2, '0');
let firstMonth = (firstHolidayTimestamp.getMonth()+1).toString();
firstMonth = firstMonth.padStart(2, '0');
console.log(`${firstDay}/${firstMonth}/${currentYear}`);

const lastDay = ((lastHolidayTimestamp.getDate()).toString()).padStart(2, '0');
let lastMonth = (lastHolidayTimestamp.getMonth() + 1).toString();
lastMonth = lastMonth.padStart(2, '0');
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomHoliday = holidays[Math.floor(Math.random() * 9)].date;
const randomDay = ((randomHoliday.getDate()).toString()).padStart(2, '0');
let randomMonth = (randomHoliday.getMonth() + 1).toString();
randomMonth = randomMonth.padStart(2, '0');
console.log(`${randomDay}/${randomMonth}/${currentYear}`);