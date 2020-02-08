/* Copy and paste the code from exercise 84
Refactor the code to use for instead of do/while */

let str ='';
for(let index =0;index<=15;index++){

    for(let x = 1;x<index;x++){
        if(index %2 ==0){
            str = str.concat('*');
        }
    }
    str = str.concat('\n')
    
}
console.log(str);