//exe_31

/* 
Create a new index31.js file
Calculate and show the perimeter of a triangle
First side is 10
Second side is 20
Third side is 5
Show a descriptive message to show the triangle perimeter and sides length

*/
let side1 =10;
let side2 =20;
let side3 = 5;

let triangle = side1 + side2 + side3;

console.log('The permeter of triangle is: ',triangle);

//exe_32

/* Define a height variable and assig the following value: 10
Define a base variable and assig the following value: 4
Calculate the perimiter of the rectangular
Calculate the area of the rectangular
Show both calculation results, height and base length
Use a descriptive message to show all the values
 */

 let height = 10;
 let lenght = 4;

 let results = height + lenght;

 let temp = `The height ${height} and ${lenght} are equal as result ${results}`;
 console.log(temp);

 //exe_33
 /* 
Define the userCount variable and assign the following value: 100
Increment the user count by 5
Show the following output: Users count: %userCount%
Decrement the user count by 3
Show the following output: Users count: %userCount%
We bought a new company so now we double the user count
Show the following output: Users count: %userCount%
We know that 50% of the users identify as men and the other 50% identify as women
Show the following output: Users count: %userCount%, %menCount% % & %womenCount% %
Use as many assignment operators as you can
 
 */
let userCount =100;
 
userCount +=5;
console.log(userCount);

userCount -=3;
console.log(userCount);


userCount +=userCount;
console.log(userCount);

 let menCount = userCount /2;
 let womenCount = userCount/2;
 console.log(`Total users ${userCount}. Men users ${menCount} and Women ${womenCount}`)
 



