/* 
Show the following output using while:
*************
************
***********
**********
*********
*/
  

/* let x=10;
let y =10;
let str ='';

for(let i =1 ; i<x;i++){
    for(let j = 1; j<y;j++){
        if(i + j >=y){
            str =str.concat('*');
        }else
        {
            str = str.concat(' ');
        }
    }
str =str.concat('\n');
}
console.log(str); */
let str = '';
for(let i =0;i<10;i++){

    for(let j =10;j>i;j--){
        str =str.concat('*');
    }
    str = str.concat('\n');

}
console.log(str);