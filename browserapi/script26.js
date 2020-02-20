/* 

Select the body element
Create a name array and add 10 names as items
Create a ul element
Iterate the name array and execute the following task for each item:
Create an li element
Set the name value as li element content
Insert the li element into the ul element
Finally insert the ul element into the body */


let array = ['Home','Sport','Teams','Jobs','Help','Support'];

let ul=document.createElement('ul');
for(let x = 0 ; x < array.length ; x++){
    let li=document.createElement('li');
      li.innerHTML +=array[x]; 
      li.style.border='2px solid green';  
      li.style.borderCollapse='separate';
      ul.appendChild(li);     
      
} 
document.body.appendChild(ul);

ul.setAttribute('id','main_menu');
ul.setAttribute('class','menu');
ul.style.background='yellow';

console.log(ul);