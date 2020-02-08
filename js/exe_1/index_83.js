/* Copy and paste the code from exercise 73
Refactor the code to use do/while instead of while */

let str = '';
let i=0;
do{
    for(let j =10;j>i;j--){
        str =str.concat('*');
    }
    str = str.concat('\n');
    i++;
}while(i<=10);
 
console.log(str);