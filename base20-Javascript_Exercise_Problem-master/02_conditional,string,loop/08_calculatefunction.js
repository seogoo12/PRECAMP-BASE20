/*

    문제, 임의의 수 2개와, 연산 기호 1개를 입력받아 기호대로 계산한 결과를 리턴해야 합니다

*/

function calculateFunction(num1, num2, op) {
  // 여기에 코드를 작성하세요
  let result;
  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    result = num1 / num2;
  } else if (op === "%") {
    result = num1 % num2;
  } else {
    result = "연산기호가 올바르지 않습니다";
  }
  return result;
}

module.exports = calculateFunction;
