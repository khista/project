//exe_43
/* Create a new index43.js file

Define a text variable with the following value: game of thrones
Define 3 variables with the following names:
firstChar
secondChar
thirdChar
Assign the firstChar the first char from the text variable
Assign the secondChar the char at index 5 from the text variable
Assign the thirdChar the char at index 8 from the text variable
Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar
Transform the result variable to uppercase
Show the result value as output: the final result is: GOT
What happens when you use an invalid index number (for example, 1000)? Try it! */

let game='game of thrones';

let firstChar;
let secondChar;
let thirdChar;

    firstChar = game.charAt(0);
    console.log("the first character is : "+firstChar);
    secondChar = game.charAt(5);
    console.log("The second character is : "+secondChar);
    thirdChar = game.charAt(8);
    console.log("The eight Character is : "+thirdChar);
let concatTheWords = firstChar.concat(secondChar,thirdChar);
let ToUperCase= concatTheWords.toUpperCase();

    console.log("The result from game of thrones is : "+ToUperCase);
    
    firstChar =game.charAt(1000);//it prints empty speace 
    console.log(firstChar);
//exe_44

/* 
Define a text variable and assign the following value: HELLO
Define a result variable
Get each char from the text variable and revert the text assigning it to the result variable
At the end you should be able to show the following text: OLLEH
Once you reverted the text, transform it to lowercase
Show the final output: the final result is: olleh
It kind of sound spanish, right?.. ole!!! (lol)
*/

let greeting = 'HELLO';
let result;
console.log("Before: "+greeting);
    result = greeting.split('');
let revert = result.reverse();
let textJoint=revert.join('');
console.log("AFter: "+textJoint.toLowerCase()+"\n\n\n\n");
//45
/* 
Define a playerName variable with the following value: Patrik Laine is lame
Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
Use the slice method to get the following words or phrases from the previous variables:
Patrik Laine is
jets
the best
, Go
Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!

*/
let playerName ='\n\n\nPatrik Laine is lame';
let team1 ='New Jersey Devils';
let team2 ='New York Rangers';
let team3 =' Winnipeg jets';
let team4 = 'Pittsburgh Penguins';
let message ='Winnipeg is the best Canadian city, go Winnipeg';
console.log(playerName.slice(3,19))
console.log(team3.slice(10,14));
console.log(message.slice(12,-27));
let comma = message.slice(34,-11);
let goUperb= message.slice(36, 38);
 
console.log(comma.concat(goUperb.toUpperCase()));



