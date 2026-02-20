`use strict`;
const input = document.getElementById("balance-input");
const select = document.getElementById("type");
const result = document.getElementById("balance");
const history = document.getElementById("history");
const typeInput = document.getElementById("text-input");
const changeTitle = document.querySelector(".header-tab");
const btn = document.querySelector(".btn");
const balanceDiv = document.querySelector(".balance");
// TODO
// hover on button ADD when income it's gonna be green, when expense red
// Style history table
// turn around gradient on button
let balance = 0;
let counter = 0;
// Placeholder function
function place() {
  if (select.value === "income") {
    select.classList.remove("expense-select");
    select.classList.add("income-select");
    typeInput.placeholder = "Thing that you got money from";
    input.placeholder = "Add income to balance";
    btn.classList.remove("expense-btn");
    btn.classList.add("income-btn");
  } else {
    select.classList.remove("income-select");
    select.classList.add("expense-select");
    typeInput.placeholder = "Thing that you pay for";
    input.placeholder = "Add expense to balance";
    btn.classList.remove("income-btn");
    btn.classList.add("expense-btn");
  }
}
select.addEventListener("change", place);
place();
function track() {
  console.log(select.value);
  console.log(input.value);
  console.log("hello");
  // validate input
  if (input.value === "" || Number(input.value) <= 0) {
    alert(
      "Wrong value, please enter a positive number and chose INCOME or EXPENSE",
    );
    input.value = "";
    return;
  }
  if (select.value === "expense") {
    counter++;
    balance -= Number(input.value);
    history.innerHTML += `<div class='content-tab-last'><span class='content'>${typeInput.value}</span> <span class='content expense'>-${input.value} </span></div>`;
  } else {
    counter++;
    balance += Number(input.value);
    history.innerHTML += `<div class='content-tab-last'><span class='content'>${typeInput.value}</span> <span class='content income'>+${input.value} </span></div>`;
  }
  const change = document.querySelector(".content-tab-last");
  if (counter === 1) {
    changeTitle.classList.remove("first-header-tab");
  }
  if (counter >= 2) {
    change.classList.remove("content-tab-last");
    change.classList.add("content-tab");
  }
  // Check balance status, update class and display balance
  if (balance < 0) {
    balanceDiv.classList.add("balance-minus");
    balanceDiv.classList.remove("balance-plus");
    result.classList.remove("income");
    result.classList.add("expense");
  } else if (balance > 0) {
    balanceDiv.classList.add("balance-plus");
    balanceDiv.classList.remove("balance-minus");
    result.classList.remove("expense");
    result.classList.add("income");
  } else {
    balanceDiv.classList.remove("balance-plus");
    balanceDiv.classList.remove("balance-minus");
    result.classList.remove("expense");
    result.classList.remove("income");
  }
  typeInput.value = "";
  input.value = "";
  result.innerText = balance;
}
