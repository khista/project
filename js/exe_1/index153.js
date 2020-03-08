/* 

Define a arithmetic variable and assing a literal value with the following methods:
add
subtract
multiply
divide
remainder
Each method accepts 2 numeric parameters and shows the operation result
So, add will add both numbers together and log the result (the rest of the methods work in the same way)
Show an error if the parameters values are not numbers
Call the methods:
add(2, 10)
subtract(10, 5)
multiply(3, 100)
divide(40, 2)
remainder(20, 2)

*/

const arithmetic ={
    add: function(num1,num2){
        if(!Number.isInteger(num1)||!Number.isInteger(num2)){
           return 'invalid entry';
        }else
        return num1 + num2;
        
    },
    subtract:function(num1,num2){
        if(!Number.isInteger(num1)||!Number.isInteger(num2)){
            return 'invalid entry';
         }else
         return num1 - num2;
    },
    multiplay:function(num1,num2){
        if(!Number.isInteger(num1)||!Number.isInteger(num2)){
            return 'invalid entry';
         }else
         return num1 * num2;
    },
    divide:function(num1,num2){
        if(!Number.isInteger(num1)||!Number.isInteger(num2)){
            return 'invalid entry';
         }else
         return num1 / num2;
    },
    remainder:function(num1,num2){
        if(!Number.isInteger(num1)||!Number.isInteger(num2)){
            return 'invalid entry';
         }else
         return num1 % num2;
    }

}

console.log(arithmetic.add(23,12));
console.log(arithmetic.divide(23,12));
console.log(arithmetic.multiplay(23,12));
console.log(arithmetic.remainder(23,12));
console.log(arithmetic.subtract(23,12));