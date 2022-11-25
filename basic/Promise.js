// 콜백지옥-> promise 도입(ES6)

const promise = new Promise();
promise
    .then(function () {
        //코드가 실행이 완료가 되었을 때
    })
    .catch(function () {
        //코드가 실행이 실패했을 경우
    });

//결론: Promise는 성공&실패 판정기계

// ex)1초 대기 성공 후에 특정 코드를 실행하려면?
const 프로미스 = new Promise(function (성공, 실패) {
    setTimeout(function () {
        성공();
    }, 1000);
});

프로미스.then(function () {
    console.log("1초 대기 성공했습니다");
}).catch(function () {
    console.log("실패했습니다");
});

//new Promise()로 생성된 변수를 콘솔창에 출력해보면 현재상태가 나옴
//1. 성공/실패 판정 전에는 <pending> 이라고 나오며
//2. 성공 후엔  <resolved>
//3. 실패 후엔 <rejected> 이런 식으로 나옵니다.

// Promise는 동기를 비동기로 만들어주는 코드가 아니다. 일종의 디자인 패턴 10초 걸리는 어려운 연산을 시키면 10초동안 브라우저가 멈춘다.

// 자바스크립트는 평상시엔 동기적으로 실행이 되며 비동기 실행을 지원하는 특수한 함수들 덕분에 가끔 비동기적 실행이 될 뿐
