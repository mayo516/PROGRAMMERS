def solution(rsp):
    win ={"2" : "0", "0" :"5", "5" : "2"}
    arr  =list(rsp)
    answer_arr = []
    for i in arr:
        answer_arr.append(win[i])
    answer ="".join(answer_arr)
    return answer