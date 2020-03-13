


const Body = document.querySelector('Body');

Body.addEventListener('keypress',function(event){
    const keyCode = event.charCode;
    const key = String.fromCharCode(keyCode);
window.alert('Values: '+ key);
    console.log(key);
})