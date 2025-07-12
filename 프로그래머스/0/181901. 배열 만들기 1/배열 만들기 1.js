function solution(n, k) {
    var answer = []; let a = []; let temp = 0;
    for(let i =1 ; i<=n ; i++){
      if(i%k == 0){
         a.push(i);
      }
    }
    
    for(let j = 0; j< a.length ; j++){  // 0,1,2
        for(let f = j+1; f<a.length; f++){  // 1 , 2
            if(a[j]>a[f]){
                temp = a[j];
                a[j] = a[f];
                a[f] = temp;
            }
        }
    }
    
    answer = a;
    return answer;
}