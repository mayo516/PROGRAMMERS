def solution(my_string):
    new_string = '-'.join(my_string)
    arr = new_string.split('-')
    
    moeum = [ "a" , "e" ,"i" , "o", "u"]
    
    for i in moeum:
        while True:
            if i in arr:
                arr.remove(i)
            else : break
 


    answer = "".join( arr)
    return answer