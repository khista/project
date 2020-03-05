/* Create a new index134.js file
Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
1
3
6
... so on
If the final result equals 500500 then show the following output: Good job!!!
Else show: Take a look to see if something is wrong */

const list = [];
 
let index=0;
while(index<=20){
    list.push(index);
    if(list[index]===10){
        console.log('Good job!!!')
        /* list[index]+=index;
        continue; */
    }
    
    console.log(list[index]);
    index++;
}