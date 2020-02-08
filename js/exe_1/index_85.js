/* Copy and paste the code from exercise 75
Refactor the code to use do/while instead of while */

 function Fibonacci (n){
    if(n==0) return 0;
    if(n<=2) return 1;

    let result = Fibonacci(n-1) + Fibonacci(n-2);
    return result;
} 



var index = 0;

do{
    console.log(Fibonacci(index));
    index ++;
}while(index<=10);
