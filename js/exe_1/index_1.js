
/*
Date: 21/01/2020
Authord: Fazli
Topic: Exe_1 Node JS
*/

var person = {
    Name:"John",
    LastName:'Deved',
    Age:32,
    Address:'409-233 Elwell st',
    Date:'23/02/1923'  
}

var properties = Object.keys(person);

properties.forEach(function(s){
    console.log(person[s]);

});