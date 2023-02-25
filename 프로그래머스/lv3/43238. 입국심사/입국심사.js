// function solution(n, times) {
//     let answer = 0;
//     const time = [];
    
//     for(let i = 1 ; i < n + 1 ; i++) {
//         for(let j = 0 ; j< times.length ; j++) {
//             time.push(times[j] * i);
//         }
//     }
//     const a = time.sort((a, b)=>a - b);
   
//     answer = a[n-1]
//     return answer;
// }

function solution(n, times) {
    let minTime = 1;
    let maxTime = n * Math.max(...times);
    let answer = maxTime;
    
    while (minTime <= maxTime) {
        const midTime = Math.floor((minTime + maxTime) / 2);
        let totalPassed = 0;
        
        for (const t of times) {
            totalPassed += Math.floor(midTime / t);
            if (totalPassed >= n) {
                break;
            }
        }
        
        if (totalPassed >= n) {
            answer = midTime;
            maxTime = midTime - 1;
        } else {
            minTime = midTime + 1;
        }
    }
    
    return answer;
}