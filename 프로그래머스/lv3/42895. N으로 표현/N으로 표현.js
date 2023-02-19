    function solution(N, number) {
        let answer = 0;
        const dpArray = [[]];
        for (let i = 1; i < 9; i++) {
            const count =[];
            for (let j = 1; j < i; j++){
                for (let k of dpArray[i-j]) {
                    for (let l of dpArray[j]) {
                        count.push(k+l);

                        if (k-l>0) {
                            count.push(k-l);
                        }
                        count.push(k*l);
                        if(k !==0 && l !==0) {
                            count.push(Math.floor(k/l));
                        }
                    }
                }
            }
            count.push(parseInt(N.toString().repeat(i)));
            if (count.includes(number)) {
                return i;
            }
            dpArray.push(...[new Set(count)])
        }
        return -1;
    }
