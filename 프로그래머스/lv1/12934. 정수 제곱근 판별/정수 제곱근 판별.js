function solution(n) {
    // n이 어떤 수의 제곱인지 구하기 
    let result 
   (Math.sqrt(n))%1 === 0 ? result =  Math.pow((Math.sqrt(n)+1),2) :result =  -1
    // 제곱이면 그 수+1의 
    //아니면 -1을 리턴 
    return result
}