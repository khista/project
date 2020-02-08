/* Copy and paste the code from exercise 83
Refactor the code to use for instead of do/while */

let str = '';
 
for(let index=0;index<=10;index++){
        for(let j=10;j>index;j--){
            str = str.concat('*');
        }
        str=str.concat('\n');
}
console.log(str);