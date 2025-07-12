function solution(num_list, n) {
    var answer = [];
    
    let a =[] ; let b = [];
    // n 번째 이후의 원소 => slice(n , num_list.length);
    a= num_list.slice(n,num_list.length);
    // n 번째까지의 원소 => slice(0 , n);
    b = num_list.slice(0,n);
    
    
    
    a.forEach( n1 => answer.push(n1));
    b.forEach( n2 => answer.push(n2));
    
    return answer;
}