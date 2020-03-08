/* 
Define a tripExpenses array with the following values:
The first item is hotel fee, it's a number, type a value that you like
The second item is trip fee, it's a number, type a value that you like
The third item is meals fee, it's a number, type a value that you like
Define a budget variable and assign the sum of all the tripExpenses using reduce
Show the tripExpenses items as output with the following format:
hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
Show the final budget items as output with the following format
Total trip budget: %budget%

*/

 const tripExpenses = [30,20,10];
 let budget=tripExpenses.reduce(function(acom,acc){
     return acom + acc
    });

console.log(`Hotel Expense: ${tripExpenses[tripExpenses.length-3]}  Trip Expenses ${tripExpenses[tripExpenses.length-2]} Meals Expenses ${tripExpenses[tripExpenses.length-1]}`);
console.log(`The total Budget is : ${budget}`);