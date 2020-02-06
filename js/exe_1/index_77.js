/* Copy and paste the code from exercise 67
Refactor the code to use do/while instead of while */




let numbers =100;
let str='';
do{
    str = str.concat(numbers,' ');
    numbers--;
}while(numbers>=0);
 console.log(str);