/* Copy and paste the code from exercise 77
Refactor the code to use for instead of do/while */
 

 let str='';

 for(let numbers = 100;numbers>0;numbers--){
     str=str.concat(numbers,' ');
 }
 console.log(str);