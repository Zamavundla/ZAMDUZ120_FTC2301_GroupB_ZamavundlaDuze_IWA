// scripts.js //

import { company, year } from './configuration.js';

const message = '© ' + company + ' ' + year;
console.log(message);
const footer = document.querySelector('[data-key="footer"]');
footer.innerText = message;