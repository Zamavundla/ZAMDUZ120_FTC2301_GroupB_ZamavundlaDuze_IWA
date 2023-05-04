// nwabisa.js //
/*
export const firstname = "Nwabisa";
export const surname = "Gabe";
export const role = "CEO";

const privateDisplay = firstname + " " + surname;
document.querySelector('#nwabisa').innerText = privateDisplay

const publicDisplay =  role;
document.querySelector('nwabisa').innerText = publicDisplay;*/


// nwabisa.js
export const firstname = "Nwabisa";
export const surname = "Gabe";
const privateDisplay = firstname + " " + surname;
document.querySelector('#nwabisa').innerText = privateDisplay;

export let publicDisplay = "CEO";
publicDisplay = document.querySelector('[nwabisa]').innerText;