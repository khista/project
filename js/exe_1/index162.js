/* Create a new index162.js
Copy and paste the code from the previous exercise
Refactor the code to match the new requirements
Show each user property name and value as output
Tip: you will have to get the user properties in a dynamic way */


const user={
    profile_sidebar_fill_color: "DDEEF6",
  profile_sidebar_border_color: "C0DEED",
  profile_background_tile: false,
  name: "Sean Cummings",
   
}
//access onlye propersity of the user with follwoing code  
 //console.log(Object.keys(user));

  const properties = Object.keys(user);
  
properties.forEach(function(data){
    console.log(data +": "+user[data]);
})  

 




 /* const person ={
    name:'sab',
    age:34,
    add:'webmail'
}
person.city='burnaby';
person.country='Canada';

console.log(Object.keys(person)); */
/* const properties = Object.keys(person);
 properties.forEach(function(prom){
     console.log(person[prom]);
 }) */