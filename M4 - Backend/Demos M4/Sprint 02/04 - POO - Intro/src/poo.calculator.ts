type TOperation = "sum" | "sub" | "mul" | "div";

interface IConfig {
  operation: TOperation;
  num1: number;
  num2: number;
}

// function operator({ operation, num1, num2 }: IConfig) {
//   switch (operation) {
//     case "sum":
//       return num1 + num2;
//     case "sub":
//       return num1 - num2;
//     case "mul":
//       return num1 * num2;
//     case "div":
//       return num1 / num2;
//   }
// }

class CalculatorServices {
  total = 0;

  operator({ operation, num1, num2 }: IConfig) {
    switch (operation) {
      case "sum":
        return (this.total = num1 + num2);
      case "sub":
        return (this.total = num1 - num2);
      case "mul":
        return (this.total = num1 * num2);
      case "div":
        return (this.total = num1 / num2);
    }
  }
}

const calculator = new CalculatorServices();
calculator.operator({ operation: "sum", num1: 2, num2: 8 });