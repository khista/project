//exe_46
/* 
Define a userAndPassword variable and assign the following value: 'pepito2017,12345'
Define a username variable and use the substr method to only get the username from the userAndPassword variable (pepito2017)
Define a password variable and use the substr method to only get the password from the userAndPassword variable (12345)
Show the following output: The user %username% has %password% as password

*/

/* let userAndPassword ='pepito2017,12345';
let username = userAndPassword.substr(0,10);
let password = userAndPassword.substr(11,20);
console.log("User Name: "+username);
console.log("Password is : "+password);

console.log(`The user: ${username} has password: ${password}`);
 */
//exe_47
/* Define a students variable and assign 5 student names from your class, separated by commas
Define a result variable and use the students variable split method to get a students name array and assign it as result variable value
Show the result value as output: console.log('Students names:', %result%) (something like this) */


/* const students = "waleed khibar kabir jamil osman";
let singalName = students.split(' ');//split each name in full word.
console.log("Students names: "+singalName[2]);// the number is for index 
let char = students.split('');// return the char at index 
console.log(char[4])// index 4
const par = "The quick brown fox jumps over the lazy dog.";
const word = par.split(' ');//with space it will return word
console.log(word[3]);
const chars = par.split('')//with no space it will return char 
console.log(chars[5]);
const parCopy = par.split();// no simcolumn will return the complete sentance
console.log(parCopy);
let longString1 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
console.log(longString1); */

//exe_48
/* 
    Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
Declare a result value and assign the result of adding pi and answerToLife values
Show the result variable value and name as output (use console.log(variable name, variable value))
Show the following output: 45.14 is the result of adding pi and answerToLife
Concatenate the strings and transform 45.14 (result value) from number to string using toString method

*/
let messages1 = '3.14 it\'s a great number but 42 it\'s the answer to life';
 
let pi = parseFloat(messages1.slice(0,5));
console.log(typeof pi + pi);

console.log(typeof messages1.substr(0))
 
let answerToLife = parseInt(messages1.slice(29,31));
console.log(typeof answerToLife +' '+answerToLife );
 
let result = pi + answerToLife;

console.log(result);

let conv = result.toString();
console.log(result);




let part ='1.34';
console.log("Type of part: "+typeof part +" \nresult : "+part );
 
let ConvToNum = parseFloat(part);//covert to number and avoiding string letter ( we can user parseInt,float)
console.log("Type of part: "+typeof ConvToNum +" \nresult : "+ConvToNum );

let x = 6;
console.log(x.toString() +'23');
 console.log("----------------------49-----------------------------");
//exe_49
/* 
Define 2 variables with the names firstNumber and secondNumber
Assign firstNumber the number 10
Assign secondNumber the number 5
If the first number is bigger than the second number then show the following output: Number %firstNumber% is bigger than %secondNumber%
Now try changing the secondNumber value and see what happens when you execute the code
*/
let firstNum =10;
let secondNum =20;
if(firstNum>secondNum){
    console.log(`The first namber ${firstNum} is bigger than ${secondNum}`);
}else{
    console.log(`The second Number ${secondNum} is bigger than ${firstNum}`);
}

console.log("----------------------50-----------------------------");
//exe_50

/* Define a number variable and assign the following value: 10
If number is even then show the following message: %number% is an even number
Try changing the value to an odd number to see what happens */


let anum = 50;
if(anum %2 ==0){
    console.log(` ${anum} is an even number`);

}else{
    console.log(`${anum} is not an even number`);
}