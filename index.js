//set and update the time every second
let clock = document.querySelector(".clock");
let time = new Date().toLocaleTimeString();
clock.innerHTML = `Time : ${time}`;

//set and update the date every minute
let date = document.querySelector(".date");
let day = new Date().toLocaleDateString();
date.innerHTML = `Date : ${day}`;

//update the time every second
setInterval(() => {
  let time = new Date().toLocaleTimeString();
  clock.innerHTML = `Time : ${time}`;
}, 1000);

//update the date every minute
setInterval(() => {
  let day = new Date().toLocaleDateString();
  date.innerHTML = `Date : ${day}`;
}, 60000);

//get day
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let today = week[d.getDay()];
document.getElementById('day').innerHTML = `Day : ${today}`;

//--------------------------------------------------------------------
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");
let plus = document.querySelector("#plus");

//decrease the counter
minus.addEventListener("click", () => {
  let count = parseInt(document.querySelector("#count").innerHTML);
  count--;
  document.querySelector("#count").innerHTML = count;
});

//reset the counter
reset.addEventListener("click", () => {
  document.querySelector("#count").innerHTML = 0;
});

//increase the counter
plus.addEventListener("click", () => {
  let count = parseInt(document.querySelector("#count").innerHTML);
  count++;
  document.querySelector("#count").innerHTML = count;
});
