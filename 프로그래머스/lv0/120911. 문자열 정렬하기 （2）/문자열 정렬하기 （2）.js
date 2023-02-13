function solution(my_string) {
    const arr = []
    arr.push(...my_string.toLowerCase());
    arr.sort()
    let answer = arr[0]
    for(let i = 1; i<arr.length ; i++) {
        answer = answer + arr[i]
    }
    
    return answer;
}