/* Create a basic HTML document
Create a script tag on the document head element
Add the script.js file to the document
script.js
Using the console show odd numbers from 1 to 1000 */

let index=1;
let num ='';
while(index<100){
    if(index % 2 !=0){
        num += index;
       
    }
    index++;
    console.log(index);
}
window.alert(num);
