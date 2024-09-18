class Calculator {
  constructor() {
    this.calculateResult = 0;
    this.num1 = document.querySelector("#num1");
    this.num2 = document.querySelector("#num2");
    this.calculateBtn = document.querySelector("#calculateBtn");
    this.result = document.querySelector("#result");
    this.operations = document.querySelector("#operation");
    this.calculateBtn.addEventListener("click", () => this.calculate());
  }

  add() {
    this.calculateResult =
      parseInt(this.num1.value) + parseInt(this.num2.value);
  }

  subtract() {
    this.calculateResult =
      parseInt(this.num1.value) - parseInt(this.num2.value);
  }

  multiply() {
    this.calculateResult =
      parseInt(this.num1.value) * parseInt(this.num2.value);
  }

  divide() {
    this.calculateResult =
      parseInt(this.num1.value) / parseInt(this.num2.value);
  }

  calculate() {
    const operation = this.operations.value.trim();

    switch (operation) {
      case "add": {
        this.add();
        break;
      }
      case "subtract": {
        this.subtract();
        break;
      }
      case "multiply": {
        this.multiply();
        break;
      }
      case "divide": {
        this.divide();
        break;
      }
    }

    this.result.innerHTML = this.calculateResult;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const myTodoList = new Calculator();
});
