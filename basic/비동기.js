/*
자바스크립트는 항상 동기식 처리 (synchronous)
한번에 코드 한줄씩 차례차례 실행
자바스크립트를 실행하는 웹브라우저는 stack이라는 코드 실행 공간이 있는데
거기서 코드를 한줄한줄 차례로 실행된다.
*/

//비동기처리 (asynchronous)라는 것도 가능
//실행을 미루고 옆으로 잠깐 제껴둘 수 있는 코드들은 미리 정해져있다.
// ex) setTimeout, addEventListener, ajax 관련 함수
console.log(1);
setTimeout(function () {
    console.log(2);
}, 1000);
console.log(3);
// 132
// 함수 안에 있는 콜백 함수로도 비동기가 가능!
