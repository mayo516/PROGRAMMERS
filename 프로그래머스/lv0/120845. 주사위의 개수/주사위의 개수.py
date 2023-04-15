import math
def solution(box, n):
    answer = 1
    for i in box:
        answer *= math.floor(i/n)
    
    return answer