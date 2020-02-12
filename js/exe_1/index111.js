//exe_111
/* Create a new index111.js file
Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd */

let checkNumber = function(first,second,thrid,four,fivi){
    let listOFnum=  [first,second,thrid,four,fivi];
    for(let c = 0;c<listOFnum.length;c++){
        if(listOFnum[c] % 2 ==0){
            console.log(`The number ${listOFnum[c]} is even`);
        }else{
           console.log(`The number ${listOFnum[c]} is odd`);
        }
        
    }
}
checkNumber(2,5,3,24,12);