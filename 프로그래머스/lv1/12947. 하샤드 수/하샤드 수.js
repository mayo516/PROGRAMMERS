function solution(x) {
    let sum = 0;
    let str = x.toString();
    for (let i = 0 ; i<str.length; i++) {
        sum = sum + parseInt(str[i]);
    }
    
return (x % sum == 0) ? true : false; 
}