/* 
Select the first link element
Show the href and class attributes values
Use any of the ways that you know
 */


let element = document.querySelector('a');

let id1 = element.className;
let id2= element.attributes[0].name;

console.log(element);
console.log(element.getAttribute('class'));
console.log(id1);
console.log(id2);










 //let seleElement = document.querySelector('p');
/* let id=seleElement.getAttribute('id');
let idVlue =seleElement.getAttribute('class')
console.log(id);
console.log(idVlue);
  */ 


  //let id = seleElement.className;
  //console.log(id);
  //console.log(seleElement.getAttribute('id'));
/* console.log(seleElement.attributes);
console.log(seleElement.attributes[0].name);
console.log(seleElement.attributes[0].value);
console.log(seleElement.attributes[1].name);
console.log(seleElement.attributes[1].value); */