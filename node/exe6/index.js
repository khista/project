/* 
Create the following folder/file structure:
/ex_6
  |-- index.js
Init an NPM project inside the ex_6 folder
Use ex_6 as project name
Add a start script to run the index.js file
index.js
Define a greet function using Arrow Function syntax
This functions accepts 2 parameter
First parameter is a string that represents a person first name
Second parameter is a string that represents a person last name
This functions shows the following message when it's called
Hi %firstname% %lastname%
Call the function and pass your first and last name as parameters
Extra
Add a third parameter to the greet function
This parameter is a function that we'll use as callback
This callback will get executed after greeting the person
This callback function will show the following output:
This code gets executed after the greet function call
Run the script again to see the new feature */
 
const greet=(paramet1,paramet2,callback )=>{
    
    console.log(`Hi ${paramet1} ${paramet2}`);
    return callback();
    
};

green('Ahmad','Khan',function() {
    console.log('This code gets executed after the greet function call');
});


















//const express = require('express');
//console.log(express());

//first install logger and then install logplease (npm install logger and npm install logplease)
 
/* const Logger = require('logplease');
const showLog = Logger.create('showMessage');
showLog.debug('This message is from Debug');
showLog.info('This message from info'); */

 /* const onelinerjoke = require('one-liner-joke');
 const getMss = onelinerjoke.getRandomJoke();
 console.log(getMss);
 
const getRandomJoke = onelinerjoke.getRandomJokeWithTag("IT")

 console.log(getRandomJoke);

 //access another file function.
 const getprice = require('./index');
const price= getprice(12,23);
console.log('Total calculated ' + price);


//function 

const students=['tom','yasir','ahmad'];


students.forEach(student =>{
    console.log(student);
}); */