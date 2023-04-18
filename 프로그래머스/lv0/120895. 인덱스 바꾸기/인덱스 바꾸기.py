def solution(my_string, num1, num2):
    string = list(my_string)
    a = string[num1]
    b = string[num2]
    string[num2] = a
    string[num1] = b
    result = ''.join(string)
    return result