def solution(my_string):
    arr = list(my_string)
    new_arr =[]
    for i in range(len(arr)):
        if arr[i].isupper() == True:
          new_arr.append(arr[i].lower()) 
        else: 
            new_arr.append(arr[i].upper()) 
    answer = ''.join(new_arr)
    return answer