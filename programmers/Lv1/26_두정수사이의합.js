/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
a	b	return
3	5	12
3	3	3
5	3	12
*/

function solution(a, b) {
    let answer = 0;

    if (a <= b) {
        for (let i = a; i <= b; i++) {
            answer += i;
        }
    } else {
        for (let j = b; j <= a; j++) {
            answer += j;
        }
    }
    return answer;
}

// 다른 풀이
function adder(a, b, s = 0) {
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}
