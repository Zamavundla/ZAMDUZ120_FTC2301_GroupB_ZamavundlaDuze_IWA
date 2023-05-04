/*const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = tax.913 / 100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
console.log(balance)*/


const salary = 4000;
const lodging = 'apartment';
const size = 'large-';

// Only change the syntax below (not the values or key names)

const expenses = {
  none: 0,
  transport: 10.2,
  food: 51.7501,
};

const tax = {
  734: '3%',
  234: '20%',
  913: '12%',
  415: '38%',
  502: '42%',
};

const rent = {
  none: 0,
  'small-room': 200,
  'large-room': 300,
  'small-apartment': 400,
  'large-apartment': 800,
  'small-house': 1200,
  'large-house': 2400,
};

// You can change below however you want

const taxAsDecimal = parseInt(tax['913']) / 100;
const afterTaxAmount = salary * (1 - taxAsDecimal);
const rentAmount = rent[`${size}${lodging}`];
const totalExpenses = expenses.transport + expenses.food + rentAmount;
const total = (afterTaxAmount - totalExpenses).toFixed(2);

console.log(total);
