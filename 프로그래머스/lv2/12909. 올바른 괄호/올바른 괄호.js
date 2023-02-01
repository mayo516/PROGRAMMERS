function solution(s){
    
    const count = [];
    if(s[0] === ')') {
        return false;
    } else if(s[s.length -1] === '(') {
        return false;
    }
    
    for (let i = 0; i<s.length ; i++) {
        if(s[i] === '('){
            count.push('(')
        }else if (count.length !== 0){count.pop()}
        else{return false}
    }
    if(count.length === 0) {
        return true;
    }else return false

  
}