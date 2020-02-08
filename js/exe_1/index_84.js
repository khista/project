/* 

Copy and paste the code from exercise 74
Refactor the code to use do/while instead of while
*/
let str ='';
let i = 0;

 


do{
    for(let x = 1;x<i;x++){
        if(i % 2 == 0){
            str= str.concat('*');
        } 
    }
        str =str.concat('\n')
        i++;
}while(i<=15);
console.log(str);
