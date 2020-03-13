
/*  Select the firstButton id element using querySelector method
When the user clicks this button will see an alert message with the following message:
You clicked an event listened element
Use addEventListener to add this functionality
Add other event listener to this button reading the doc and using your imagination! */

let button = document.querySelector('button');
 
 button.onclick=function(){
    window.alert('You clicked an event listened element');
} 

 button.addEventListener('click',function(){
     console.log('this is from add event listener');
 })