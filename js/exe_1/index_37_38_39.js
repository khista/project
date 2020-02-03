//exe_37

/* Create a new index37.js file
Define an average variable and assign the following value: 6
Define a studentAverage variable and assign the following value: 4
Show the following output:
This student has a greater or equal average required to pass: true/false
This student is missing %points% to pass */

let average = 20;
let studentAverage =4;

let pass = studentAverage >=average;
let missingPoints = (average -  studentAverage);
console.log(" Student gain average? ",pass);
console.log("Student missing point are ",missingPoints);


//exe_38

/* Create a new index38.js file
Define a firstName variable and assign your name as it's value
Show the following output: My name is %firstName% and it is %characters% characters long */

let firstName ='Khista Fazli';
console.log(`First Name ${firstName} and Character ${firstName.length} long`);

//exe_39

/* Create a new index39.js file
Define a firstName variable and assign your name as it's value
Define a lastName variable and assign your last name as it's value
Show the following output:
My first name is %firstName% and it is %nameCharacters% characters long
My last name is %lastName% and it is %lastNameCharacters% characters long
The character difference between my first name and last name is %charsDiff%
My first name is longer than my last name: true or false */

let FirName = 'khista';
let laName ='Fazli';
console.log(`My first Name is : ${FirName} and it is ${FirName.length} characters long.`);
console.log(`My last Name is ${laName} and it is ${laName.length} characters long.`);

console.log(`Deferent between letters of Frist Name ${FirName.length} and last Name ${laName.length} are equal: ${FirName.length - laName.length}`);
