
/* 
Create a new index163.js
Define a add function
This function will return a numeric value with result of adding all the numbers that we pass as parameter
As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
Call the add function passing 5 numbers and show the result as output
Call the add function passing 10 numbers and show the result as output */

let add=function(){
    var list = 0;
    for(let i =0;i < arguments.length;i++){
         list = list + arguments[i];
    }
    return list;
}

console.log(add(1,2,3,3,5,6,7,8));
console.log(add(34,23,1,2,3,4,4,5,5,5,5,6,7,9));







//const number = [1,2,3,4,5,6,7,8,0];


/* let result = number.reduce(function(result, number) {
    return result + number;
  });


  console.log(result); */

/* number.forEach(function(num){
    console.log(num);
}); */
//console.log(number.sort());

/* let evenNum= number.filter(function(num){
    return num % 2 ==0;
})
console.log(evenNum); */
 
/*  
let mappedNum = number.map(function(num){
    return num + 10;
})

console.log(mappedNum); */

/* var number = 10;

let finalResult = function(result){
    console.log(`The result is: ${result}`);
};

let add= function (number,callback){
    number++;
    callback(number);
}

add(number,finalResult);

 
 */