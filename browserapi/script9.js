
/* 

Create a script tag on the document head element
Ask the user to input a complete URL
Redirect the user to the new location

*/

let site =  window.prompt('Enter only web site domain name (eg. google.com');
let url=`https://${site}`;
location=url;
console.log(location);

