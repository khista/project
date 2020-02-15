/* 
Select the ul element
Show the ul children elements as output
Select the 2nd child element, assign it to a variable and assign the green class to it
Select the 4th child element, assign it to a variable and assign the red class to it
Use the selected child elements to show the parent one as output
Using one of the child elements get a reference to the parent and add the orange class to it
Expected result:
  <ul class="orange">
    <li>Item 1</li>
    <li class="green">Item 2</li>
    <li>Item 3</li>
    <li class="red">Item 4</li>
    <li>Item 5</li>
  </ul>
*/

let ulElment=document.querySelector('ul');
//console.log(ulElment);
let children = ulElment.children;
//console.log(children);

let secondChild= children[1];
console.log(secondChild);
secondChild.setAttribute('class','green');

let fourthChild= children[3];
console.log(fourthChild);
fourthChild.setAttribute('class','red');

let li= document.querySelector('li');
let parent=li.parentElement;
console.log(parent);//<ul></ul>

let par = secondChild.parentElement;
par.setAttribute('class','orange');
console.log(par.attributes);











/* //children elements
let div = document.querySelector('div');
let child = div.children;
console.log(child);


//parent elements

let paragraph = document.querySelector('p');
let parent = paragraph.parentElement;

console.log(parent); */

/*  let div = document.querySelector('div');
 let children = div.children;
 let firstChild= children[0];
 console.log(firstChild);
 */

