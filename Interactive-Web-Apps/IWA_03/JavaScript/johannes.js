// johannes.js
/*
export const firstname = "Johannes"
export const surname = "Potgieter"
export const role = "Intern"

const privateDisplay= firstname + " " + surname;
document.querySelector('johannes').innerText = privateDisplay;

const publicDisplay =  role;
document.querySelector('johannes').innerText = publicDisplay;*/

// johannes.js
export const firstname = "Johannes";
export const surname = "Potgieter";
const privateDisplay= firstname + " " + surname;
document.querySelector('#johannes').innerText = privateDisplay;

export let publicDisplay = "Intern";
publicDisplay = document.querySelector('[johannes]').innerText;
