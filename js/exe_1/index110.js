//exe_110


/* Define the average function that accepts 5 numbers as parameter
Call the average function with the following values: 2, 4, 10, 20, 30
After executing the call show the following message: The average is %average% */


let average = function (a,b,c,d,e){
 
    let result = (a+b+c+d+e) /5;
    return console.log(`The average is ${result}`);

}
average(23,12,4,53,3);
