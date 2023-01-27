// function solution(progresses, speeds) {
//     let arr = []
//     for (let i =0; i<progresses.length ; i++) {
//         let num = (100 - progresses[i] )/ speeds[i]
//         arr.push(num)
        
//     }
//     console.log(arr)
//     let answer = [];
//     let day =Math.ceil(arr[0]) 
//     let done = 1;

// for(let i =0 ; i < progresses.length ; i++) {
//     day = arr[0];
//     if(day < arr[1]) {
//         answer.push(done) ;
//         day = Math.ceil(arr[1]) ;
//         arr.shift();
//         done = 1;
       
//     }else if (day > arr[1] || day === arr[1]){
//         done = done + 1; 
//         arr.shift();
//     } else if (arr.length === 1){
//         answer.push(done) ;
//     }
// }
    
//     return answer;
// }

function solution(progresses, speeds) {
  let answer = [];

  let day = [];
  
  for (let i = 0; i < progresses.length; i++) {
    day.push(Math.ceil((100 - progresses[i]) / speeds[i]));
}
console.log(day)
    let beforeNum = day[0];
    let count = 1; 
     for (let i = 1; i < day.length; i++){
       
 if (day[i] > beforeNum) {
        answer.push(count);
        count=0;
        count++ ;
        beforeNum = day[i];
        
    } else if (day[i] < beforeNum) {
        count++
    
    } else {
        count++
    }
           if(i==day.length -1 ) {
             answer.push(count);

         }
         
  }
  return answer
}