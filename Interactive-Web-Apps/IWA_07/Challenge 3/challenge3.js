/*const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = -9394

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = -4582.21000111

const divider = '----------------------------------'

// Only change below this line

//const currency = 'R' //declared currency as 'R'//
//console.log(currency);
const leoOwed = parseFloat('R' + leoBalance + sarahBalance);
const sarahOwed = parseInt("R" + leoBalance + sarahBalance);

const leo = leoName + leoSurname + owed + 'R' + sarahBalance;
const sarah = sarahName+ sarahSurname+ owed + 'R' + sarahBalance;
const total = (leoBalance + sarahBalance).toFixed(2);
//const result =(leo + sarah + divider + divider + total +  divider) //removed owed because it was a combination of a string and number//
const result =(divider + total +  divider) //removed owed because it was a combination of a string and number//


console.log(result.toFixed(2));*/

const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const sarahBalanceCalc = parseFloat(sarahBalance.trim()) * -1
const leoBalanceCalc = parseFloat(leoBalance.trim()) * -1
const owed = (leoBalanceCalc + sarahBalanceCalc).toFixed(2)
const leo = leoName + " " + leoSurname + " (Owed: " + "R " + leoBalanceCalc.toFixed(2)
    + ")"
const sarah = sarahName + " " + sarahSurname + " (Owed: " + "R " + sarahBalanceCalc.toFixed(2)
+ ")"

console.log(leo + "\n" + sarah + "\n\n" + divider + "\n" 
+ "\t" + "Total amount owed: R " + owed + "\n" + divider)
