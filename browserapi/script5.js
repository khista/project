/* Create a basic HTML document
Create a script tag on the document head element
Using the prompt method ask the user to input a number
Using the alert method show if the number is even or odd
Your number is even/odd */


let number1 = parseInt( window.prompt("Enter Number and i will tell is even/odd"));
 
if(isNaN(number1)){
    window.alert(`The input is invalid`);
}else if( number1 % 2 ==0){
    window.alert(`The number is ${number1} even`);
 }else if(number1 % 2 !=0){
     window.alert(`The number is ${number1} odd`);
 } 
  