/* Define a evenNumbers variable and assign a function as value
When executed the evenNumbers function will print even numbers between 0 and 100 as output
Execute this function 5 times */

function even(){
    for(let index=0;index<100;index++){
        if(index % 2 == 0){
            console.log(index);
        }
    }
    
}


console.log(even());