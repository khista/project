/*  
Ask the user to input the number of seconds that he would like to stay in our site
Show how many seconds left he has using console.log()
Once the session is over show the following message: */

 let secondSty = window.prompt('Enter second you want to sty in our site');
let count = 1;
let choseTimer = function(number){
    let newNumber = number;
    console.log(`you total entered number is ${number}`);
      setInterval(() => {
            if(newNumber==0){
                clearInterval(secondSty);
            }else{
                    console.log(`Time Passed ${count} second and you left ${newNumber}`);
                    count++;
                    newNumber--;  
                 } 
     }, number);
}
choseTimer(secondSty); 
