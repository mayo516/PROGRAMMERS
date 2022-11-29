function solution(my_string) {
    let answer = my_string.split('').map(v=> +v).filter(v => !Number.isNaN(v)).reduce((a,c)=> a+c, 0);
    return answer;
}