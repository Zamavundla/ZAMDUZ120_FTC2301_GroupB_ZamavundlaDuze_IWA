const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

const WeekDay = {
    Sunday: 0,
    Saturday: 6,
};

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const createArray = (length) => Array.from({ length }, () => null);

const createData = (date) => {
    date.setDate(1);
    let startDay = date.getDay();
    let daysInMonth = getDaysInMonth(date);
    const weeks = createArray(5);
    const days = createArray(7);
    let result = [];

    let day = 0 - startDay;
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        let value = {
            week: weekIndex + 1,
            days: [],
        };
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            day++;
            const isValid = (day > 0) && (day <= daysInMonth);
            value.days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        }
        result.push(value);
    }
    return result;
};

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>
        ${existing}
    `;
    return result;
};

const createHtml = (data) => {
    let result = '';
    for (let weekIndex = 0; weekIndex < data.length; weekIndex++) {
        let inner = '';
        const days = data[weekIndex].days;
        for (let dayIndex = days.length - 1; dayIndex >= 0; dayIndex--) {
            let isToday = new Date().getDate() === days[dayIndex].value;
            let isWeekend = days[dayIndex].dayOfWeek === WeekDay.Sunday || days[dayIndex].dayOfWeek === WeekDay.Saturday;
            let isAlternate = (data[weekIndex].week % 2) === 0;
            let classString = 'class="table__cell';
            if (isToday) {
                classString += ' table__cell_today';
            }
            if (isWeekend) {
                classString += ' table__cell_weekend';
            }
            if (isAlternate) {
                classString += ' table__cell_alternate';
            }
            classString += '"';
            inner = addCell(inner, classString, days[dayIndex].value);
        }
        inner = addCell(inner, 'class="table__cell table__cell_sidebar"', `Week ${data[weekIndex].week}`);
        result += `<tr>${inner}</tr>`;
    }
    return result;
};

const updateCalendar = (date) => {
    const tableBody = document.querySelector('[data-content]');
    
    tableBody.classList.add('fade-out');

    setTimeout(() => {
        document.querySelector('[data-title]').innerText = `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
        const data = createData(date);
        tableBody.innerHTML = createHtml(data);

        tableBody.offsetHeight;
        tableBody.classList.remove('fade-out');
    }, 300); 
};

const current = new Date();
updateCalendar(current);

document.getElementById('prevMonth').addEventListener('click', () => {
    current.setMonth(current.getMonth() - 1);
    updateCalendar(current);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    current.setMonth(current.getMonth() + 1);
    updateCalendar(current);
});