/* Create a basic HTML document
Create a script tag on the document head element
Using prompt method ask the user to input his firstname
Using prompt method ask the user to input his lastname
Show the following message using the alert method
Welcome %firstname% %lastname% to JavaScript client side!!! */


let firstName,lastName;

firstName = window.prompt(`Enter your First Name`);
lastName = window.prompt(`Enter your Last Name`);

window.alert(`Your First Name is: ${firstName} \nyour last Name: ${lastName}`);

