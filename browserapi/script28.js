/* Create a program that ask the user to input names and show them inside an order list
If the number of items is even the text must be #ddd
If the number of items is odd the text must be #eee
The user must be able to insert all the user names that he wants
Each time the user inputs a name we need to show it on the list/document */
let ul= document.createElement('ul');
let liList;
let orderList = [];
let count=1;
let chose= true;
while(chose==true){

let asked = window.prompt('Enter Order name');
orderList[count]=asked;
liList=document.createElement('li');
liList.innerHTML +=orderList[count];
ul.appendChild(liList);
if(count %2 == 0){
    liList.style.color="#ddd";
   }else{
    liList.style.color='black';
   }
count++;

chose = window.confirm("I am going to countinue!!!"); 
}
ul.style.background='#154360';
document.body.appendChild(ul);


