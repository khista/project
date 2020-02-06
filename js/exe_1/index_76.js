/* Copy and paste the code from exercise 66
Refactor the code to use do/while instead of while */

let numbers=0;

let str='';
do{
   str = str.concat(numbers ,' ');
   
       numbers++;
}while(numbers<10);
console.log(str);