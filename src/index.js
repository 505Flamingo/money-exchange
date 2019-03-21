// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let answer = {};
    let findHalfs = Math.floor(currency / 50);
    let restAfter50 = currency % 50;
    let restAfter25 = restAfter50 % 25;
    let restAfter10 = restAfter25 % 10;
    let restAfter5 = restAfter10 % 5;
     
    if (currency > 10000) {
      answer.error = "You are rich, my friend! We don't have so much coins for exchange";
      } else if (currency > 0) {
      if (findHalfs) {
        answer.H = findHalfs;        
      }
      if (Math.floor(restAfter50 / 25)){
        answer.Q = Math.floor(restAfter50 / 25);        
       }
      if (Math.floor(restAfter25 / 10)){
        answer.D = Math.floor(restAfter25 / 10);        
       }
      if (Math.floor(restAfter10 / 5)) {
        answer.N = Math.floor(restAfter10 / 5);        
       }
      if (Math.floor(restAfter10 % 5) / 1){
        answer.P = Math.floor(restAfter5 / 1);        
       }      
      }
      return answer;
   
}
