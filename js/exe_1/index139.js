
/* Define a numbers array with values between 1000 and 1
Iterate over the numbers array and filter the following values creating new arrays for each type:
Even numbers
Odd numbers
Show the last 10 odd numbers as output
Show the first 20 even numbers as output */

const list =[];
let index = 0;
while(index<=100){
        list.push(index);
    index++;
}
let odd =[];
let even=[];
let numbers =list.filter((num,index)=>{
    
    if(num % 2==0){
        console.log('These number are odd');
        odd.push(num);
        return odd;
    }else{
        even.push(num);
        return even;
    }
    
});

console.log(odd);
console.log('----------------------');
console.log(even);

/* 
const grades = [12,20,50,100,80,90];

let goodGrades = grades.filter(index =>{
    return index ===80;
});
console.log(`the best number is : ${goodGrades}`);
console.log(`All gredes are listed: ${grades}`); */