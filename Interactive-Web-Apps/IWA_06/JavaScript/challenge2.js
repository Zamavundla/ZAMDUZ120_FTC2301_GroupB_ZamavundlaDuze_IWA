/*const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

const payment = hourOfDay && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00';
let balance = undefined;


if (payment) {
	const taxAsDecimal = tax / 100;
    const startingAfterTax = salary * 1 - taxAsDecimal;
    const expenses = transport + food + rent;
    balance = startingAfterTax - expenses ;
}

console.log(balance.toFixed(2))*/



const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = "00";
const minuteOfDay = "00";

// Only change below this line
const payment = hourOfDay !== undefined && minuteOfDay !== undefined && parseInt(hourOfDay) === 0 && parseInt(minuteOfDay) === 0;
let balance = undefined; // converted hours and minutes to numbers//

if (payment) {
  const taxAsDecimal = parseInt(tax) / 100; // converted tax to a number//
  const startingAfterTax = salary * (1 - taxAsDecimal);
  const expenses = transport + food + rent;
  balance = startingAfterTax - expenses;
  balance = "R " + balance.toFixed(2);
} else {
  balance = "Time is not known";
}

console.log(balance);
//final value is R274.05 because it was rounded off to 2 decimal places using .toFixed//
