/* 

    문제
    
    임의의 수를 입력받아 홀수일 경우 true를 리턴하고, 그렇지 않을 경우 false를 리턴하는 함수를 완성하세요.
    0은 짝수로 간주합니다

    ----

    힌트

    홀수는 항상 2로 나누어 떨어지지 않습니다

*/


function isOdd(num) {
    // 여기에 코드를 작성하세요
    if(num%2==1){
        return true
    } else {
        return false
    }
}

module.exports = isOdd;