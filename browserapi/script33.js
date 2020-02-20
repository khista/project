










let febanacci = function(n){
    if(n<2) return n;
    return febanacci(n-1) + febanacci(n-2);
}
let postion = 10;

console.log(febanacci(postion));


/* let button = document.querySelector('button');

button.addEventListener('click',function(){
    console.log('working finde');
    window.alert('hello eventListener');
}); */