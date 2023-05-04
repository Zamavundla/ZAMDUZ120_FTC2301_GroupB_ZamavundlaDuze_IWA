/*FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'
const country = 'RSA'
const shipping = 


if (country === 'RSA') { shipping === 400 && currency === 'R' }
console.log(FREE_WARNING)

if (country = NAM){
shipping = 600 && currency === $ }
else {shipping = 800}
console.log(FREE_WARNING)


const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries = 35 * 2
const pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

const price = (shoes + batteries + pens + shirts > 1000 && currency === $);

if price = shoes + batteries + pens + shirts > 1000 && currency === $ {
	else (country = NAM && customers < 2) {
			elseif (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}
    console.log(Price)


if (shipping = 0 && customers !== 1);
 console.log(FREE_WARNING);
 
location = 'NK' ?
console.log(BANNED_WARNING);
console.log('price', currency, shoes + batteries + pens + shirts + shipping);

customers = '1'
currency = null*/

const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
let shipping = null;
let currency = 'R';
let customers = 1;
let location = 'NK';

const country = 'RSA';

// Calculate shipping cost based on country
if (country === 'RSA') {
  shipping = 400;
} else if (country === 'NAM') {
  shipping = 600;
  currency = '$';
} else {
  console.log(BANNED_WARNING);
}

// Calculate item prices
const shoesPrice = 300;
const toysPrice = 100 * 5;
const shirtsPrice = 150 * NONE_SELECTED;
const batteriesPrice = 35 * 2;
const pensPrice = 5 * NONE_SELECTED;

// Calculate subtotal
const subtotal = shoesPrice + toysPrice + shirtsPrice + batteriesPrice + pensPrice;

// Apply discount if applicable
let total = subtotal;
if (total > 1000 && currency === '$') {
  if (country === 'NAM' && customers < 2) {
    shipping = 0;
  } else if (country === 'RSA') {
    shipping = 0;
  }
}

// Add shipping cost to total
if (shipping !== null) {
  total += shipping;
}

// Round total to 2 decimal places and display
total = total.toFixed(2);
console.log('price', currency, total);

// Display free shipping warning if applicable
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

