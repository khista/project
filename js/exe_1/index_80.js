/* Copy and paste the code from exercise 70
Refactor the code to use do/while instead of while */

let numbers =0;

do{
    if(numbers % 2==0){
        console.log(`The number is even ${numbers}`);
    }
    numbers++;
}while(numbers<=100);