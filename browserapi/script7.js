/* Create a basic HTML document
Create a script tag on the document head element
Show the user the following message using the alert method:
This program adds all the numbers you input
While the user confirms that he wants to input another number execute the following acctions
Using the prompt method ask the user to input a number
Add the number
Show the partial result with the following message:
The result so far is: %result% */

let number =parseInt(window.prompt('Enter number'));
let isYes = window.confirm('Would you like to input another number to add');
let result= 0;
if(isYes==true){
    let number2 =parseInt(window.prompt('Enter number'));
     result = number + number2;
}else{
    console.log('you did not entery second number');
}

console.log(`Result is so for ${result}`);