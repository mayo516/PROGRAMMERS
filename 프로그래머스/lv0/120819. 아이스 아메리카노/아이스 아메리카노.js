function solution(money) {
    const 개수 = Math.floor(money/5500)
    var answer = [];
    answer.push(개수)
    const 남는 = money - 개수 * 5500
answer.push(남는)
    return answer;
}