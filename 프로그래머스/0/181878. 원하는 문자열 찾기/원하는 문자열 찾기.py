def solution(myString, pat):
    answer = 0
    
    # 대소문자 구분안하니까  소문자로 변환
    a1 = myString.lower()
    a2 = pat.lower()
    
    # pat , a2 가   myString a1에서 존재하지 않으면
    if a2 in a1 :
        answer = 1
    else :
        answer = 0
    
    return answer