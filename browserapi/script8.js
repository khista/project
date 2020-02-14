/* Copy and paste the code from the previous exercise
Refactor the code to math the new requirements:
Now we need to keep track of how many numbers the user input
Once the user doesn't want to add any more numbers show the following message:
The final result is: %result%
The user input %numbers% numbers
The average is: %average% */
let number,number2;
 number =parseInt(window.prompt('Enter number'));
let isYes = window.confirm('Would you like to input another number to add');
let result= 0;
if(isYes==true){
     number2 =parseInt(window.prompt('Enter number'));
     result = number + number2;
}else{
    if(number2 > 0 && number > 0){
        let average = (number + number2) / 2;
        console.log(`The final result is = ${result} and user input is = ${number} and the average = ${average}`);
    }
    console.log("The number is not devisable by zero");
}

console.log(`Result is so for ${result}`);