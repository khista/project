/* Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :) */


let revert=function(str){
    let word='';
    for(let x= str.length -1;x>=0;x--){
        word +=str[x];

    }

    return console.log(word);
}

revert('hello');
revert('world');
revert('Apply');