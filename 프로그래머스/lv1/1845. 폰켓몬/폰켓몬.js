function solution(nums) {
    let answer = 0;
    const hash = new Map();
  
    for(let i =0; i<nums.length ;i ++) {
        const pre = hash.get(nums[i]) ;
         
        hash.set(nums[i], pre === undefined ? 1 : hash.get(nums[i]) + 1)
    
    }
    
    answer = hash.size;
    if( nums.length/2 < answer) {
        return nums.length/2
    } else {
        return answer;
    }
    
}