/* 
Create a basic HTML document
Create a script tag on the document head element
Using the confirm method show the user the following method:
Would you like the author of this document?
If the user confirms the question then we show him the following message
The author is %firstname% %lastname%%
Else we show the following message:
So, So, SOOO, sad.. the author is crying now... thanks


*/
let name="Stiv";
let lastname = "Harbar";

let isYes = window.confirm('Would you like the author of this document');
 
if(isYes == true){
    window.alert(`The author First Name : ${name}  and Last Name: ${lastname}`);
}else{
    window.alert(`So,So,SOOO, sad.. The author is carying now..`);
}