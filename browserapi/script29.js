/* 

Select the ul element
Select each list item and assign it to a variable (use children property)
Remove each list item from the ul element using removeChild
 
*/

let ul = document.querySelector('ul');
let firstChild=ul.children.item(0);
let lastChild=ul.children.item(6);

ul.removeChild(firstChild);
ul.removeChild(lastChild);









/* let div = document.querySelector('div');
div.innerHTML='';
document.body.innerHTML='';
 */




/*  let div = document.querySelector('div');
let firstparag=div.children.item(2);
div.removeChild(firstparag);
let firstparags=div.children.item(1);
div.removeChild(firstparags);
let firstparagss=div.children.item(0);
div.removeChild(firstparagss);
  
//document.body.appendChild(div); */