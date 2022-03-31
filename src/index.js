let prevNumber = "";
let calculationOperator = "";
let currentNumber = "";

// key-number click function
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (calculatorScreen.value === "0") {
      currentNumber = "";
    }
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// input function
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// input operator
const operator = document.querySelectorAll(".operator");

operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  } else {
    calculate();
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

// calculation event function
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  if (prevNumber === "0") {
    currentNumber = "0";
  }
  currentNumber = result;
  calculationOperator = "";
};

// clenner function
const clearBtn = document.querySelector(".all-clear");

const claerAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  claerAll();
  updateScreen(currentNumber);
});

// function for decimal value
const decimal = document.querySelector(".decimal");
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

//zero value handling
const dzero = document.querySelector(".double-zero-btn");

dzero.addEventListener("click", () => {
  if (calculatorScreen.value === "0") {
    claerAll();
    updateScreen("0");
  } else {
    inputNumber("00");
    updateScreen(currentNumber);
  }
});

const zero = document.querySelector(".zero-btn");

zero.addEventListener("click", () => {
  if (calculatorScreen.value === "0") {
    claerAll();
    updateScreen("0");
  }
});
