/* 
Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber
The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
In this case you need to validate which number is bigger than the other to get the right feature and output
Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
Make sure that the parameters are numbers, you can use typeof for it
Show a error message in case any of the parameters are not number
Call the biggerNumber with the following parameters: 6 and 3
Call the biggerNumber with the following parameters: 2 and 2

*/
let biggerNumber =function(firstNumber,secondNumber){
   return validationNumbers(firstNumber, secondNumber);
}
let validationNumbers=function(f,s){
    if(f>s){
        return `The first number ${f} is bigger then ${s}`;
    }else if(f==s){
        return `Both numbers are equal first ${f} and ${s}`;
    }else
    return `The second number ${s} is bigger ${f}`;
}


console.log(validationNumbers(12,3));