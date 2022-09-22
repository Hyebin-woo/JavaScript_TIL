/*
n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

*/

function solution(numbers, target) {
    let answer = 0;

    // dfs(인덱스,현재 인덱스까지의 계산결과)
    function dfs(count, sum) {
        if (count === numbers.length) {
            // 재귀 종료조건
            if (target === sum) {
                //이때 현재까지 계산결과인 sum과 target을 비교해서 같으면 answer++
                answer++;
            }
            return;
        }
        dfs(count + 1, sum + numbers[count]); // 더했을 경우
        dfs(count + 1, sum - numbers[count]); // 뺐을 경우
    }

    dfs(0, 0);

    return answer;
}
