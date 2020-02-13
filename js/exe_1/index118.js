/* Define a grades variabe and assign an array with 10 numbers from 1 to 10
Define a result variable and assign the result value of adding the 
first, third, fifth and last number from the grades array */

let grades = [1,2,3,4,5,6,7,8,9,10];
let result=0;
 for(let x = 0 ; x<grades.length;x++){
    result +=grades[x];
 }
console.log(result);