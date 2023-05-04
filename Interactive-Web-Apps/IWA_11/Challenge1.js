// script.js
/*
const order1 =  {
    biscuits: document.querySelector('[biscuits]'),
    donuts: document.querySelector('[donuts]'),
    pancakes: document.querySelector('[pancakes]'),
    status: document.querySelector('[status]')
}

const order2 =  {
    biscuits: document.querySelector('[biscuits]'),
    donuts: document.querySelector('[donuts]'),
    pancakes: document.querySelector('[pancakes]'),
    status: document.querySelector('[status]')
}

const order3 = {
    biscuits: document.querySelector('[biscuits]'),
    donuts: document.querySelector('[donuts]'),
    pancakes: document.querySelector('[pancakes]'),
    status: document.querySelector('[status]')
}

biscuits = order1.biscuits,
donuts = order1.donuts,
pancakes = order1.pancakes,
status = order1.status ? Delivered : Pending

biscuits = order2.biscuits,
donuts = order2.donuts,
pancakes = order2.pancakes,
status = order2.status ? Delivered : Pending

biscuits= order3.biscuits,
donuts = order3.donuts,
pancakes = order3.pancakes,
status = order3.status ? Delivered : Pending*/


const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

const biscuits1 = order1.querySelector('.biscuits dd');
const donuts1 = order1.querySelector('.donuts dd');
const pancakes1 = order1.querySelector('.pancakes dd');
const status1 = order1.querySelector('.status dd');

const biscuits2 = order2.querySelector('.biscuits dd');
const donuts2 = order2.querySelector('.donuts dd');
const pancakes2 = order2.querySelector('.pancakes dd');
const status2 = order2.querySelector('.status dd');

const biscuits3 = order3.querySelector('.biscuits dd');
const donuts3 = order3.querySelector('.donuts dd');
const pancakes3 = order3.querySelector('.pancakes dd');
const status3 = order3.querySelector('.status dd');

biscuits1.textContent = order1.dataset.biscuits;
donuts1.textContent = order1.dataset.donuts;
pancakes1.textContent = order1.dataset.pancakes;
status1.textContent = order1.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits2.textContent = order2.dataset.biscuits;
donuts2.textContent = order2.dataset.donuts;
pancakes2.textContent = order2.dataset.pancakes;
status2.textContent = order2.dataset.delivered === "true" ? "Delivered" : "Pending";

biscuits3.textContent = order3.dataset.biscuits;
donuts3.textContent = order3.dataset.donuts;
pancakes3.textContent = order3.dataset.pancakes;
status3.textContent = order3.dataset.delivered === "true" ? "Delivered" : "Pending";
