def solution(numbers):
    numbers.sort(reverse=True)
    
    a = numbers[0] * numbers[1]
    numbers.sort()
    b = numbers[0] * numbers[1]
    if a > b:
        return a
    else:
        return b
    