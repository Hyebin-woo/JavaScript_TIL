//promise then 지옥 -> async, await 도입 각각 Promise와 then을 매우 쉽게 만들어주는 문법( ES8)

// async 키워드를 쓰면 Promise 오브젝트가 생성
// then() 함수가 귀찮다면 await 키워드(대체품)
// await은 실패하면 에러가 나고 코드가 멈춥니다
// 코드실행을 멈추고 싶지 않으면  에러처리 해주는 try catch 문법쓰기
async function 더하기() {
    var 어려운연산 = new Promise((성공, 실패) => {
        실패();
    });
    try {
        var 결과 = await 어려운연산;
    } catch {
        //어려운연산 Promise가 실패할 경우 실행할 코드
    }
}
