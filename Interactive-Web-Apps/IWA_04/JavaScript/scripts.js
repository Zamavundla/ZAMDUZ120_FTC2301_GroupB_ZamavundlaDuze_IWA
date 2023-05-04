/*const date = 2050
const status = 'student'
let count = 0

if (date = 2050) {
    let holidayMonth = 'January'
    let holidayName = 'New Years Day'
	console.log(month, name)

    let holidayMonth = 'March'
    let name = 'Human Rights Day'
	console.log(month, name)

	const date = 'April'
    let holidayMonth = 'Family Day'
    let name = 'Fredom Day'
	console.log(date, name)
	console.log(date, name)

	let countincrease = count + 4

	if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)*/

const date = 2050;
const status = 'student';
let count = 0;
//equal operators wee not in the right format//
// date was using const instead of let to allow it to change//
if (date === 2050) {
    let holidayMonth = 'January';
    let holidayName = 'New Years Day';
	console.log(holidayMonth, holidayName);

    holidayMonth = 'March';
    holidayName = 'Human Rights Day';
	console.log(holidayMonth, holidayName);

	const holidayDate = 'April';
    holidayMonth = 'Family Day';
    holidayName = 'Freedom Day';
	console.log(holidayDate, holidayName);
	console.log(holidayDate, holidayName);

	count += 4;

	if (status === "student") {
	  console.log('June', 'Youth Day');
		count += 1;
  }

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');

	
	holidayMonth = 'December';
	console.log(holidayMonth, 'Day of Reconciliation');
	count += 3;

	if (status === "parent") {
	  console.log(holidayMonth, 'Christmas Day');
		count += 1;
  }

	console.log(holidayMonth, 'Day of Goodwill');
	count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
