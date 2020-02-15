/* 

Select the h1 and div element and assign them to a new variable
If any of these elements has attributes then add the striked class to both of them
Else add the bold class
Remove the name attribute from the div element (use the web console elements tab to see the result)

*/

let elementh1 = document.querySelector('h1');
let elementDiv= document.querySelector('div');
 
if( elementh1.hasAttributes()||elementDiv.hasAttributes()){
 elementh1.setAttribute('class','striked');
 elementDiv.setAttribute('class','striked'); 
}else{
    elementh1.setAttribute('class','bold');
 elementDiv.setAttribute('class','bold'); 

}
console.log(elementh1.hasAttributes());
console.log(elementh1.attributes[0].value);
console.log(elementDiv.attributes[0].value);
/* console.log(elementh1.attributes); */









/* let element = document.querySelector('h2');
console.log(element.hasAttributes());
element.setAttribute('id','mein');
console.log(element.hasAttributes());
console.log(element.getAttribute('id'));

element.removeAttribute('id');
console.log(element.hasAttributes());
console.log(element.getAttribute('id'));
 */


/* 
 const title = document.querySelector('h2');
console.log(title.hasAttributes());
title.setAttribute('id','Menu');
console.log(title.hasAttributes());
console.log(title.getAttribute('id'));  */