/* Create a basic HTML document
Create a script tag on the document head element
Ask the user to input his username
Ask the user to input his password
Show the following alert message
Welcome %username%
After 10 seconds and for one time only show the following message to the user
Do you still want to be logged?
If the user confirms that he wants to be logged show the following message:
%username% your session has been restored
Else show the following message
%username% your session has expaired */


let username, password;

let userAndPass = function () {
    username = window.prompt('Enter User Name');
    password = window.prompt('Enter Password');
    return username;
}
window.alert(`Welcome ` + userAndPass());
let confirmation = function () {
    let isYes = window.confirm(`Do you want to be logged?`)

    if (isYes == true) {
        return true;
    } else {
        return false;
    }

}
setTimeout(confirmation, 10000);
if (confirmation() == true) {
    window.alert(`${username}  your session has been restored`);
} else {
    window.alert(`${username} your session has expaired `);
}