//exe_57

/* Copy and paste the code from exercise 54
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator */

let userName = 'pepe2017';
let password = '12345';

let result = (userName=='pepe2017' && password=='12345') ? `logged in user, show user home page` : `sorry, there has been a problem, please try it gain`;



if(userName=='pepe2017' && password=='12345')
{
    console.log(`Logged in user, show user home page`);

}else{
    console.log(`Sorry, there has been a porblem, please try it again`);
}

