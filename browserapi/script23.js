
/* 
Select the ul element
Assign the following html string
'<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>'
Show the ul element children using both children and innerHTML properties
Extra
Try to create something with all the things that we learned so far! :) */


//innerHTML
let ul=document.querySelector('ul');
ul.innerHTML= "<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>";
console.log(ul);

//Children

let li = document.querySelector('li');
let parent = li.parentElement;
let SupperPar = parent.parentElement;

console.log(parent);
console.log(SupperPar);
 
 



/* let para = document.querySelector('p');

let mess = para.innerHTML;
para.innerHTML="<span>ooooooooooooooooowowow what are you doing man?</span>";

//console.log(para.innerHTML); */