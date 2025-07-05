def solution(arr):
    answer = []
    # arr 배열을 순회하기
    for i in range(len(arr)):
         
        if arr[i] >= 50 and arr[i] % 2 == 0: # item >= 50 -> item % 2
            answer.append(arr[i] // 2)
        elif arr[i] < 50 and arr[i] % 2  == 1:   # item < 50 -> item * 2      
            answer.append(arr[i] * 2)
        else:
            answer.append(arr[i])
    return answer