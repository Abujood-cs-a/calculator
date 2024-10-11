let display = document.querySelector("#display");

let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let dote = document.querySelector(".dote");

let clearTheLast = document.querySelector(".clearLast");
let clearTheDisplay = document.querySelector(".deleteDisplay");

let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");
let mod = document.querySelector(".mod");
let equal = document.querySelector(".equal");

function appendNumber(number) {
  display.value += number;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function appendOperator(operand) {
  let lastChar = display.value[display.value.length - 1];

  if (["+", "-", "*", "/", "%", "."].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operand;
  } else {
    display.value += operand;
  }
}

zero.onclick = function () {
  appendNumber("0");
};

one.onclick = function () {
  appendNumber("1");
};

two.onclick = function () {
  appendNumber("2");
};

three.onclick = function () {
  appendNumber("3");
};

four.onclick = function () {
  appendNumber("4");
};

five.onclick = function () {
  appendNumber("5");
};

six.onclick = function () {
  appendNumber("6");
};

seven.onclick = function () {
  appendNumber("7");
};

eight.onclick = function () {
  appendNumber("8");
};

nine.onclick = function () {
  appendNumber("9");
};

dote.onclick = function () {
  appendOperator(".");
};

clearTheLast.onclick = function () {
  deleteLast();
};

clearTheDisplay.onclick = function () {
  clearDisplay();
};

add.onclick = function () {
  appendOperator("+");
};

sub.onclick = function () {
  appendOperator("-");
};

mul.onclick = function () {
  appendOperator("*");
};

div.onclick = function () {
  appendOperator("/");
};

mod.onclick = function () {
  appendOperator("%");
};

equal.onclick = function () {
  calculate();
};

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (Error) {
    display.value = `Error`;
  }
}
