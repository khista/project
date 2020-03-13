let button1 = document.querySelector('button');
 
button1.onclick = function(){
   window.alert('You clicked an event listened element');
} 

button1.addEventListener('click',function(){
    console.log('this is from add event listener');
})

let button2 =document.getElementById('secondButton');
let greeting = function(){
    window.alert('hello from second button');
}
button2.addEventListener('click',button1.onclick = function(){
    greeting();
    
 });

 let clickHander= function(){
     console.log(this);
 }
 
 
