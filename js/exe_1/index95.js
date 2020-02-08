/* Copy and paste the code from exercise 85
Refactor the code to use for instead of do/while */

function Fibonacci (n){
    if(n==0) return 0;
    if(n<=2) return 1;

    let result = Fibonacci(n-1) + Fibonacci(n-2);
    return result;
} 

for(let index=0;index<=10;index++){
    console.log(Fibonacci(index));
}

 