"use strict";
//buttons
let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let reset = document.getElementById("reset");

let first = document.getElementById("first");
let second = document.getElementById("second");
let count1 = 0;
let count2 = 0;

let inputNumber = document.getElementById("inputNumber");
let displayNumber = document.getElementById("displayNumber");

add1.onclick = function () {
  if (count2 >= inputNumber.value || count1 >= inputNumber.value) {
    return;
  }
  inputNumber.disabled = true;
  count1++;
  first.innerHTML = count1;
  if (count1 == inputNumber.value) first.style.color = "green";
};

add2.onclick = function () {
  if (count1 >= inputNumber.value || count2 >= inputNumber.value) {
    return;
  }
  inputNumber.disabled = true;
  count2++;
  second.innerHTML = count2;
  console.log(count2);
  if (count2 == inputNumber.value) second.style.color = "red";
};

inputNumber.addEventListener("input", function () {
  displayNumber.innerHTML = inputNumber.value;
});

reset.onclick = function () {
  first.innerHTML = 0;
  count1 = 0;
  second.innerHTML = 0;
  count2 = 0;
  displayNumber.innerHTML = 5;
  inputNumber.value = 5;
  inputNumber.disabled = false;
  first.style.color = "white";
  second.style.color = "white";
};
