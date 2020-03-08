

/* const ShowNumber=function(num){
    if(num<=10){
        console.log(num);
        num++;
        ShowNumber(num);
    }
}
ShowNumber(0); */


function greet(){

    let helo = function(){
        console.log('hello from another function!!!');
        }
    return helo;
}

let myfunction = greet();

console.log(typeof myfunction);

myfunction();
