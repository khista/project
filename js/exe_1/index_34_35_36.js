//exe_34
/* Create a new index34.js file
Define the following variables: income, revenue and taxes
Assign the following values:
income: 1000
revenue: 600
taxes: 500
This months objectives are:
Income of at least 800 or more
Spend less than 400 on taxes
We pay bonus if our revenue is 600
Show the following output (console.log()):
Income Objective: true or false (use greater than or equal operator)
Taxes Objective: true or false (use less than operator)
Bonus Objective: true or false (use equality operator) */

let income,revenue,taxes;
income =1000;
revenue = 600;
taxes =500;

console.log("Is the income more then 800? ", income >=800);
console.log("Did you spend less then or equl 400 on taxes", taxes<=400);
console.log("Are we pay bonus? ",revenue==600);


//exe_35

/* Create a new index35.js file
Define the clientId variable and assign the following value: 143245
Define the inputClientId variable and assign the following value: '143245'
Show as output if the input client id is the same as the client id value (use comparison by value)
Example: The input client id is correct by value? true or false
Show as output if the input client id is the same as the client id value (use comparison by value & type)
Example: The input client id is correct by value and type? true or false */

let clientID =143245;
let inputClientId = '143245';
console.log("is the CleintID match to inputCleinttID?", clientID == inputClientId);
console.log("is the CleintID equal to inputCleinttID", clientID == inputClientId,' Are the Id\'s types match? ', typeof inputClientId==typeof clientID);

 //exe_36
 /* 
 Create a new index36.js file
Define firstNumber variable and assign the following value: 10
Define secondNumber variable and assign the following value: 20
Show the following output:
Both variables have the same value: true/false
Both variables don't have the same value: true/false
 
 */

 let firstNumber = 10;
 let secondNumber=20;
 
 console.log(`Is the first number equal to Second number ${firstNumber == secondNumber}`);
   
 console.log(`Is the first number equal to Second number ${firstNumber != secondNumber}`);