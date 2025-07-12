function solution(num_list) {
    var answer = 0;
    let leng = num_list.length
    let s1 = 0 ; let s2 = 1; 
    
    // 리스트의 길이 11 이상   길이 >= 11 
      // 모든 원소의 합 
      if(leng >= 11){
    
         for(let i = 0 ; i< leng ; i++){
             s1 += num_list[i];
         }
          
          answer = s1;
    // 그게 아니라 길이 10 이하
       // 모든 원소의 곱
      }else if( leng <= 10){
          
          for(let j = 0 ; j < leng ; j++){
              s2 *= num_list[j];
          }
          answer = s2;
      }
    
    
    return answer;
}