function solution(n)
{   let sum = 0;
    let num = n.toString();

    for (let i = 0; i< num.length ; i++) {
        
        sum = sum + parseInt(num[i]);
        
         
    } return sum
}