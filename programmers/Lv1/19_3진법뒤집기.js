/*
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
*/
function solution(n) {
    let arr = [];

    while (n > 0) {
        arr.unshift(n % 3);
        n = Math.floor(n / 3);
    }
    const result = arr.reverse().join("");

    return parseInt(result, 3);
}

function solution2(n) {
    return +parseInt(n.toString(3).split("").reverse().join(""), 3);
}

//toString으로 간편하게 3진법으로 만들 수 있다.
