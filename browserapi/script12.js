/* 
Create a basic HTML document
Create a script tag on the document head element
Add a timer to show the user how many seconds has passed sinse he opened the site (every second)
Use console.log() to show the seconds
*/
let count=1;
let id =  setInterval(() => {
     console.log( `You pass ${count} second`); 
     count++; 
}, 1000);
     
clearInterval(id);
  
 