/* 
Select the body element
Define a numbers array with numbers between 1 and 100
Create a ul element
Iterate the numbers array and execute the following task for each item:
Create a li element
Set the following text: Item %number% as li element content
Add color: #ddd as li element style property if it's even number
Else add color: #eee as li element style property
Insert each list item into the ul element
Insert the ul element into the body element

*/
let ul=document.createElement('ul');
let arrayNum = [];
for(let x =1; x<=100;x++){
    arrayNum[x]=x;
    
}
 for(let x =1; x<=100;x++){
    let li=document.createElement('li');
    let numbers =` ${x}    =    ${arrayNum[x]}  `;
    li.innerHTML+=numbers;
    if(x%2==0){
        li.style.color='#ddd';
    }else{
        li.style.color='black';
    }
    ul.appendChild(li);
    console.log(arrayNum[x]);

    
}
document.body.style.background='#154360';
document.body.appendChild(ul);