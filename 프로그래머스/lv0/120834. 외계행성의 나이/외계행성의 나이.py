def solution(age):
    indexs = ["a", "b", "c", "d", "e","f" , "g" , "h" , "i" , "j" , "k" ,"l" ,"m"  , "n" , "o" ,"p" , "q", "r","s" ,"t" ,"y","v","w","x","y","z" ]
    answer_list = []
    age_list = list(str(age))
    for i in range(len(str(age))):
        alpha = indexs[int(age_list[i])]
        answer_list.append(alpha)
    answer = ''.join(answer_list)
    return answer