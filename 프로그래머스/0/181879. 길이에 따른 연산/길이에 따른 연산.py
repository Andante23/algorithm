def solution(num_list):
    answer = 0
    g =1
    # 리스트의 길이가 11 이상 len(num_list) >= 11
    # 모든 원소 다 더하고
    
    # 리스트의 길이 < 10 
    # 모든 원소의 곱
    
    if  len(num_list) >=11 :
        for num in num_list :
            answer += num
    elif len(num_list) <= 10 :
         for num in num_list :
            g *= num # 곱하기에서 0이 초기값이면 항상 0에 수렴합니다.
            answer = g 
    return answer