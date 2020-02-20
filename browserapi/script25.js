/* Select the body element
Create a h1 element
Add the h1 element the following content:
Create Dynamic content!!!
Create a paragraph element
Add the p element the following content:
This elements were created using JavaScript
Inster the h1 element into the body element
Inster the paragraph element into the body element */







let pa = document.createElement('p');
let di=document.createElement('div');
pa.setAttribute('id','qout');
pa.innerText = 'New ap install for dive';
di.innerHTML;
di.appendChild(pa);
document.body.appendChild(di);
console.log(di);
di.style.background='green';
di.style.height='300px';
di.style.width='200px';
console.log(pa);


/* var paragar= document.createElement('p');
paragar.innerText ="New paragraph add to the documents";
console.log(paragar);
document.body.appendChild(paragar);

let div = document.createElement('div');

div.style.background='red';
div.style.width='200px';
div.style.height='200px';
div.style.border='2px solid black';
document.body.appendChild(div); */