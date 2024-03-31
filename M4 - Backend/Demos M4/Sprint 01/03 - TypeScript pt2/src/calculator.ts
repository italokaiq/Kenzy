type TOperation = "sum" | "sub" | "mul" | "div";

interface ICalculatorConfig {
  operation: TOperation;
  a: number;
  b: number; 
}

function calculator({ operation, a, b }: ICalculatorConfig) {
  switch (operation) {
    case "sum":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return a / b;
  }
}

console.log(calculator({ operation: "sum", a: 45, b: 78 }));