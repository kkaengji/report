import { useState } from "react";

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const calculate = (
    operand1: number,
    operand2: number,
    op: string
  ): number => {
    switch (op) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        if (operand2 === 0) {
          // 0으로 나누는 경우 에러 처리
          return NaN;
        }
        return operand1 / operand2;
      case "%":
        return operand1 % operand2;
      default:
        return operand2;
    }
  };

  const handleButtonClick = (buttonValue: string) => {
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(buttonValue)
    ) {
      if (waitingForSecondOperand) {
        setDisplayValue(buttonValue);
        setWaitingForSecondOperand(false);
      } else {
        setDisplayValue(
          displayValue === "0" ? buttonValue : displayValue + buttonValue
        );
      }
    } else if (buttonValue === ".") {
      if (!displayValue.includes(".")) {
        setDisplayValue(displayValue + ".");
      }
    } else if (["+", "-", "*", "/", "%"].includes(buttonValue)) {
      const inputValue = parseFloat(displayValue);
      if (operator && firstOperand !== null && !waitingForSecondOperand) {
        const result = calculate(firstOperand, inputValue, operator);
        setDisplayValue(String(result));
        setFirstOperand(result);
      } else {
        setFirstOperand(inputValue);
      }
      setWaitingForSecondOperand(true);
      setOperator(buttonValue);
    } else if (buttonValue === "=") {
      if (operator && firstOperand !== null) {
        const inputValue = parseFloat(displayValue);
        const result = calculate(firstOperand, inputValue, operator);
        setDisplayValue(String(result));
        setFirstOperand(result);
        setOperator(null);
        setWaitingForSecondOperand(true);
      }
    } else if (buttonValue === "C") {
      setDisplayValue("0");
      setOperator(null);
      setFirstOperand(null);
      setWaitingForSecondOperand(false);
    } else if (buttonValue === "←") {
      setDisplayValue(
        displayValue.length > 1 ? displayValue.slice(0, -1) : "0"
      );
    }
  };

  return { displayValue, handleButtonClick };
};
