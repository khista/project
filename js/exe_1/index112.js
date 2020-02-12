//exe_112
/* 
Define a showNumbers function that accepts two numeric parameters: start and end
The showNumbers function will show all the numbers between the start and end numbers
If start is bigger than the second one show the numbers from higher to lower
If start is smaller than the second one then show the numbers from lower to higher
Call the showNumbers function using the following parameters:
start: 0, end: 1000
start: 1000, end: 0
start: 100, end: 100
start: "100", end: 300
Find a way to deal with the following scenarios:
start and end are the same number
parameters that aren't numbers
 */

 let showNumbers = function(start,end){
    if(start > end){
        for(let x =1 ;x<=start;++x){
            console.log(`The bigger number is (start) ${x}`);
        }
    }else if ( start<end){
         
        for(let x = end;x>0;x--){
            console.log(`The bigger number is (end) ${x}`);
        }
    }else{
        console.log("The numbers are equal");
    }       
}
   showNumbers(10,10);