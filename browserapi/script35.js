



let link = document.querySelector('a');
link.addEventListener('click',function(event){
    event.preventDefault();
    console.log('This link doesn\'t send us to a differen page as we\'re preventing the default behaviour');
});









 
/* let link = document.querySelector('a');
link.addEventListener('click',function(event){
    
    event.preventDefault();
    console.log('oh someone clicked me');

});

let body = document.querySelector('body')
body.addEventListener('click',function(event){
    console.log(event.clientX);
    console.log(event.clientY);
});
 let body = document.querySelector('body');

body.addEventListener('click',function(event){
console.log(event.clientX);
console.log(event.clientY);
window.alert('hello');
}); */





 