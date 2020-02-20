/* 
Selec the element with firstbutton id using getElementById
When the user clicks the button will see an alert message with the following message:
Oh.. Don't Click Me!!
Use the onclick element property
Try assigning the function to a variable and then assign the variable to the onclick handler


*/
//first solution 
/* document.getElementById('firstbutton').onclick = function(){
    window.alert('Oh.. Don\'t Click Me!!call from without variable function');
} */

//second solution
let button= document.querySelector('button');
let div = document.querySelector('div');
div.appendChild(button); 

let messages=function(){
    window.alert('Oh.. Don\'t Click Me!! \ncall from variable function');
    console.log("call from variable function")
}
button.onclick=messages;





/* let button = document.querySelector('button');

let handelOnClick = function(){
for(let x=0;x<10;x++){
let parag = document.createElement('p');
parag.innerHTML='welcome to second method';
document.body.appendChild(parag);
}
}
button.onclick=handelOnClick; */




/* let ul= document.createElement('ul');

let button = document.querySelector('button');
button.onclick= function(){
    for(let x =0;x<100;x++){
        let li=document.createElement('li');
        li.innerHTML=`Number are sttart with ${x}`;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
 */



//--------------------+++-----------------------//

/* let button = document.querySelector('button');
button.style.color="green";
button.style.fontWeight='1200';
button.style.width='100px';
button.style.height='50px';
button.style.borderRadius='10px';
button.style.boxShadow='5px 3px 4px';
button.onclick=function(){
    let para = document.createElement('p');
    para.innerHTML='Welcome to first event function click me'; 
    document.body.appendChild(para);
    console.log('the style changed');
} */