// /
const handleDivideSeparatedExpression = (expression) => {
  const numbersString = expression.split("/");
  const numbers = numbersString.map(noStr => +noStr);
  const initialValue = 1.0;
  // TODO: check no should ne be zero! (runtime error)
  const result = numbers.reduce((acc, no) => acc / no, initialValue);

  return result;
};
// *
const handleMultiplicationSeparatedExpression = (expression) => {
  const numbersString = expression.split("*");
  const numbers = numbersString.map(noStr => handleDivideSeparatedExpression(noStr));
  const initialValue = 1.0;
  const result = numbers.reduce((acc, no) => acc * no, initialValue);

  return result;
};
// both * -
const handleMinusSeparatedExpression = (expression) => {
  const numbersString = expression.split("-");
  const numbers = numbersString.map(noStr => handleMultiplicationSeparatedExpression(noStr));
  const initialValue = numbers[0];
  const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);

  return result;
};
// * - + 
const handlePlusSeparatedExpression = (expression) => {
  const numbersString = expression.split("+");
  const numbers = numbersString.map(noStr => handleMinusSeparatedExpression(noStr));
  const initialValue = 0.0;
  const result = numbers.reduce((acc, no) => acc + no, initialValue);

  return result;
};
const handle = () => {
  const expressionNode = document.getElementById("expression");
  const resultNode = document.getElementById("result");

  const result = handlePlusSeparatedExpression(expressionNode.value);
  resultNode.value = String(result);
};
