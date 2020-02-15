/* 
Ask the user to select a color showing the following message:
Please choose & input one of the following colors: green, blue or red
Select the first link element
Add the user selected color as class name to the selected element (first link)
Avoid adding the class if the user inputs a color that's not an option
So if the user selects blue as color we need to add the blue class to the first link
*/
let element = document.querySelector('a');
let color = window.prompt('Enter one color from following: green, blue,or red');

element.classList.add(color);
//element.classList.replace(color,'menu');
console.log(element.classList);

if(element !== 'blue' || element !== 'green' || element !== 'red' ){
    console.log('invalid entry');
}else{
    element.classList.add(element);
}
console.log(element.classList);












/* let element = document.querySelector('p');
element.classList.add('Hello');
element.classList.toggle('Hello');
 element.classList.toggle("bold");
 element.classList.remove('bold');
let na= element.classList.item(1);
console.log(na);
element.classList.replace('red','green');

console.log(element.classList);
 let element = document.querySelector('p');


element.classList.add('hello');
 console.log(element.attributes);
let clasN = element.className;
console.log(clasN);
let name= element.getAttribute('class');
console.log(name);
   */
/* let values=element.className;

console.log(element.classList);
console.log(element.classList[0]);
console.log(element.classList[1]);
console.log(values);
  */