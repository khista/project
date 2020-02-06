/* 

Fibonacci sequence recourson 

 */

 function Fibonacci (n){
     if(n==0) return 0;
     if(n<=2) return 1;

     let result = Fibonacci(n-1) + Fibonacci(n-2);
     return result;
 }
 var index =0;
 while(index<=10){

    console.log(Fibonacci(index));
    index++;
 }
 

    

 