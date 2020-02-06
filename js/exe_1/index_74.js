/* 

Show the following output using while:
*
***
*****
*******

*/
let str ='';
for(let i = 1;i<15;i++){
   for(let x = 1;x<i;x++){
        if(i % 2 == 0){
            str= str.concat('*');
        } 
        
    }
   
    str =str.concat('\n')
}
console.log(str);