def solution(hp):
    a= 5
    b = 3 
    c= 1
    count = 0
    
    a_number = 0 
    a_number += hp//a
    hp = hp%a
    count += a_number
    b_number = 0 
    b_number += hp//b
    hp = hp%b
    count += b_number
    c_number= 0 
    c_number += hp//c
    hp = hp%c
    count += c_number
    
    answer = count
    return answer