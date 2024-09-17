class Calculator {
  constructor() {
    this.num1 = document.querySelector("#num1");
    this.num2 = document.querySelector("#num2");
    this.calculateBtn = document.querySelector("#calculateBtn");
    this.result = document.querySelector("#result");
    this.operations = document.querySelector("#operation");

    this.calculateBtn.addEventListener("click", () => this.calculate());
  }

  calculate() {
    const operation = this.operations.value.trim();
    let result = 0;
    switch (operation) {
      case "add": {
        result = parseInt(this.num1.value) + parseInt(this.num2.value);
        break;
      }
      case "subtract": {
        result = parseInt(this.num1.value) - parseInt(this.num2.value);
        break;
      }
      case "multiply": {
        result = parseInt(this.num1.value) * parseInt(this.num2.value);
        break;
      }
      case "divide": {
        result = parseInt(this.num1.value) / parseInt(this.num2.value);
        break;
      }
    }

    this.result.innerHTML = result;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const myTodoList = new Calculator();
});
