/* 
Select the first link element
Add the blue class if the element has the class attribute
If not, then add the red class
*/

let element = document.querySelector("a");

element.classList.add('blue');
if(!(element.classList.contains('blue'))){
    element.classList.add("red");
}


console.log(element.classList);


 