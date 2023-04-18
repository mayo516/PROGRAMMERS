import re 
def solution(my_string):
    xample_text_num = re.sub(r'[^0-9]', '', my_string)
    print(xample_text_num)
 
    answer = list(xample_text_num)
    answer.sort()
    list_a = list(map(int, answer))
    return list_a