/* Create a new index147.js
Copy and paste the code from the previous exercise
Refactor the code to match the requirements
The shouldOpenBatCave function not longer accepts two parameters
Now the shouldOpenBatCave function only accepts a user parameter
Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
The rest of the code should still work the same way and show the proper output */

const user ={
    username: 'batman',
    password:'Alfred1960ROCKS',
    BatCave:function(first){
        if(this.first!='batman' || secnd!='Alfred1960ROCKS'){
            return false;
        }
        return true;
    }
};

if(user.username ==='batman' && user.password === 'Alfred1960ROCKS'){
     user.BatCave(user.username,user.password);
    console.log(`Welcome back ${user.username}`);
}else{
    console.log('Sorry, you can\'t enter the Batcave, try again..')
}

 
