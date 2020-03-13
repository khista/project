
let html = document.querySelector('html');

html.addEventListener('click',function(event){
window.alert(`click Postion X: ${event.clientX} and click Postion Y: ${event.clientY}`);
});