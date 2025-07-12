function solution(names) {
    var answer = [];
    
    let a = [] ; let b = [] ;
    // 5명씩 자르려는데  
    // 1. 전체 길이에서 -5 이 떨어진다면 
    if(names.length - 5 == 0)
      {
         answer.push(names.shift());   
      }else
      { 
         for(let i = 0 ; i< names.length ; i=i+5){
            answer.push(names[i]);
          }
      }
    
    
    return answer;
}