/*

    문제

    임의의 달을 입력받아, 각 달이 며칠로 이루어져 있는 지 알려주는 함수를 완성하세요.
    - 연도는 2016년을 기준으로 합니다.

*/

function countDays(month) {
  // 여기에 코드를 작성하세요
  const day31 = [1, 3, 5, 7, 8, 10, 12];
  const day30 = [4, 6, 9, 11];

  if (day31.includes(month)) {
    return 31;
  } else if (day30.includes(month)) {
    return 30;
  } else if (month === 2) {
    return 29;
  } else {
    return "잘못된 입력입니다.";
  }
}

module.exports = countDays;
