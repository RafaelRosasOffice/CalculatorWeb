const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let currentOperand = '';
let previousOperand = '';
let currentOperator = '';

function clear() {
  currentOperand = '';
  previousOperand = '';
  currentOperator = '';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = `${previousOperand} ${currentOperator} ${currentOperand}`;
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentOperand === '')}