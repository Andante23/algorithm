def solution(a, b):
    answer = 0

    v1 = str(a) + str(b) 
    v2 = str(b) + str(a)
    
    if int(v1) == int(v2) :
       answer = int(v1)
    elif int(v1) > int(v2) :
       answer = int(v1)
    elif int(v1) < int(v2) :
       answer = int(v2)
    return answer