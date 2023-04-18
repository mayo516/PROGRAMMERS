def solution(array):
    
    answer = []
    num = 0
    for i in range(len(array)):
        if array[i] > num:
            num = array[i]
            index = i
    answer.append(num)
    answer.append(index)
    return answer