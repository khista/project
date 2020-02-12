/* Define a fibonacci variable and assign a function value
When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
Execute this function 3 times */


let fibonacci =function(n){

    if(n==0) return 0;
    if(n<=2) return 1;
    
    let  result = fibonacci(n-1) + fibonacci(n-2);
    return result;
}
for(let index =0; index<10;index++){
    console.log(fibonacci(index));
}



//console.log(fibonacci(5));