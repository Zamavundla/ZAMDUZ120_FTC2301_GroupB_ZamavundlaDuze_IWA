// alex.js
/*
export const firstname = "Alex";
export const surname = "Naidoo";
export const role = "Head of Marketing";

let privateDisplay = firstname + " " + surname;
privateDisplay = document.querySelector('["alex"]').innerText;

const publicDisplay =  role;
publicDisplay = document.querySelector('[alex]').innerText;*/

// alex.js
export const firstname = "Alex";
export const surname = "Naidoo";
export let privateDisplay = firstname + " " + surname;
document.querySelector('#alex').innerText = privateDisplay;

export let publicDisplay = "Head of Marketing";
publicDisplay = document.querySelector('[alex]').innerText;