/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

입출력 예
 N	   answer
123	     6
987	     24
*/

function solution(n) {
    let sum = 0;
    let arr = String(n).split("");

    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    return sum;
}
// [refactoring]
function solution2(n) {
    return String(n)
        .split("")
        .reduce((acc, cur) => acc + parseInt(cur), 0);
}
