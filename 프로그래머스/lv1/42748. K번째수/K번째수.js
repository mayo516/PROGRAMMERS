function solution(array, commands) {
    
    let answer = [];
    for (i=0; i< commands.length ; i++) {
        let commandArr = commands[i];
        answer.push(array.slice(commandArr[0]-1,commandArr[1]).sort(function(a, b)  {
  return a - b;
})[commandArr[2]-1]);
    }
    return answer;
}