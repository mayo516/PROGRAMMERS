function solution(participant, completion) {
    let answer;

    let name = new Map();
// name.set('은하', 0)
    for (let i = 0; i < completion.length; i++) {
        if (name.has(completion[i])) {
            name.set(completion[i], name.get(completion[i]) + 1);
             
        } else {
            name.set(completion[i], 1);
        }
    }

    for (let i =0; i<participant.length; i++) {
        if(name.get(participant[i]) > 0  ) {
            name.set(participant[i], name.get(participant[i]) - 1);
            
        } else {
            answer = participant[i];
        }
    }
    return answer;
}

