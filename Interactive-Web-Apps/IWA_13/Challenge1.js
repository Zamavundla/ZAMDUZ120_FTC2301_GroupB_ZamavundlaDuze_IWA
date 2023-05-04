let state = 'idle';
let user = 'John';
let calculated = '1';

// Only allowed to change below


console.log(user);

const logCalc = () => { 
    isString = typeof calculated(['numerical-string']), 
    calculatedAsNumber = isString ? calculated : parseInt(calculated),
    calculated === calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}
console.log(logCalc)

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()