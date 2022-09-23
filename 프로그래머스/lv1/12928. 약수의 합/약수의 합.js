function solution(n) { 
    let result = 0 ;
   //약수를 구하기 2=1 2  3= 1 3 , 4 =  1 2 2, 5 = 1 5 1부터 3000까지 나눈 숫자가 를 
    for ( let i=0; i < n+1 ; i++ ) {
           if(n%i== 0) {
               result += i 
           }
        }   console.log(result);
     return result ;
   
    
    // 구한 약수를 더하기 
}