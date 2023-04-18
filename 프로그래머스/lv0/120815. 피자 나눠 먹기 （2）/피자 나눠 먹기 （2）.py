def solution(n):
    pizza =1
    while True:
        if(pizza * 6 )% n != 0:
            pizza += 1
        else:
            break
    answer = pizza
    return answer