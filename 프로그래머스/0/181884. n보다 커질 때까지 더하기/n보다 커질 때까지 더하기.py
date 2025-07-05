def solution(numbers, n):
    answer = 0
    t = 0 
    # numbers의 원소를 a라 하자
    
    #a1 + a2 + a3 + .... + an  > n 
    
    for i in  range(len(numbers)):
     # answer 에 num 더하기
        answer += numbers[i]
     #만약에 n보다 커지면 
        if answer > n:    
            return answer
        elif answer < n:
            i = i + 1;