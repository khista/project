
/* Select the h1 element
Define a new variable and store the h1 element content using innerText
Select the p element
Define a new variable and store the p element content using textContent
Replace the h1 element content for the paragraph one
Replace the p element content for the title one
Once this code gets executed we get the following result:
  <h1>This is a paragraph</h1> */



let element_h1 = document.querySelector('h1');
let h1_text = element_h1.innerText;
//console.log(h1_text);

let secondry = h1_text.innerText ="This is a paragraph";
console.log(secondry);








//test 

/* let element = document.querySelector('p');
let paragraph = element.innerText;
console.log(paragraph);
 let anew = paragraph.innerText = 'A new text will be apply to the old pargraph';
console.log(anew); */