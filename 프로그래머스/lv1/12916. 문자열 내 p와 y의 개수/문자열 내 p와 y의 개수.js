function solution(s){
    var answer = true;
    let pNum =0;
    let yNum = 0;
    for (let i = 0 ; i<s.length ; i++) {
        if (s[i]== 'p' || s[i]=='P') {
            pNum += 1;
        } else if (s[i]== 'y' || s[i]=='Y') {
            yNum += 1;
        }
    }
    if (pNum === yNum) {
        return true;
    } else return false;
    
}