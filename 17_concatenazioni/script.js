function calculate() {
  let result = 0;
  return {
    add: number => result += number,
    sub: number => result -= number,
    multiply: number => result *= number,
    divide: number => result /= number,
    printResult: () => console.log(result)
  };
}

const calculator = calculate();
calculator.add(2);
calculator.add(4);
calculator.multiply(3);
calculator.sub(1);
calculator.sub(3);
calculator.divide(2);
calculator.printResult(); 