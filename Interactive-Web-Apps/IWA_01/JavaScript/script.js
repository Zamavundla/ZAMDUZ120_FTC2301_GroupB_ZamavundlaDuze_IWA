
const valueA = 123
const valueB = 9
const valueC = 35

import { hello as helloA } from "./script-a"
import { hello as helloB } from "./script-b"

console.log(helloA, helloB)

const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 5

const number = document.querySelector('[data-key="number"]')
const substract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')



const substractHandler = () => {

const newValue = parseInt(number.value) - STEP_AMOUNT
   number.value = newValue
   if(add.disabled === true) {
    add.disabled = false
   }
   if(newValue <= MIN_NUMBER){
    substract.disabled = true
   }
}



const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue
    if(substract.disabled === true) {
        substract.disabled =false
    }
    if(newValue >= MAX_NUMBER){
        add.disabled = true
    }
}

substract.addEventListener('click', substractHandler)

add.addEventListener('click', addHandler)
