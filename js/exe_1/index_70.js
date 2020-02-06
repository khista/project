/* Use while structure to only sum odd numbers between 0 and 1000
Show the partial result as output too */

let numbers =0;
while(numbers<=100){
    if(numbers % 2==0){
        console.log(`The number is even ${numbers}`);
    }
    numbers++;
}