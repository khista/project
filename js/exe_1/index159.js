/* Create a new index159.js
Define a jeep variable and assign a literal object
Add the object a brand property and assign the following string value: Jeep Wrangler
Add the object a price property and assign the following numeric value: 34000
Show the following message as output using object dynamic properties (use variables or string literals) 
The %brand% is $ %price%
*/

const jeep={
    Brand:'Jeep Wrangler',
    Price:34000,
}
console.log(jeep['brand']);
console.log(jeep['Price']);


















/* const person={
    name:'jan',
    age:22,
    greeting:function(name){
        console.log(`Hello my name is: ${name} and i am ${this.age} age old`);
    },
    birthDay:function(){
        this.age++;
    }
}


person.greeting();
person.birthDay();
person.greeting();

console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']); */