const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline= document.querySelector('.deadline');
const items =document.querySelectorAll('.deadline-format h4');
//console.log(items);
let futureDate= new Date(2023,4,24,11,30,0);
//console.log(futureDate);
const year= futureDate.getFullYear();
const hours=futureDate.getHours();
const minutes=futureDate.getMinutes();

let month= futureDate.getMonth();
console.log(months[month]);
const date= futureDate.getDate();
giveaway.textContent=`Giveaway ends on ${month} ${year} ${hours}:${minutes}am`;
