def solution(array):
    array.sort()
    length = len(array)
    index = length//2 + 1
    answer = array[index-1]
    return answer