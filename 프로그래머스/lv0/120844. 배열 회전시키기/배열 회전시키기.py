from collections import deque

def solution(numbers, direction):
    queue = deque(numbers)
    if direction == "right":
        a = queue.pop()
        queue.appendleft(a)
    else:
        b = queue.popleft()
        queue.append(b)
    
    answer = list(queue)
    return answer