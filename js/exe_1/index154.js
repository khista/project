/*  
Define a player variable and assign a literal object with the following properties and methods:
property: name, value: null
property: energy, value: 100
property: lives, value: 3
method: loseEnergy
method: recoverEnergy
method: loseLife
method: recoverLife
Methods
The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
The loseLife doesn't accept parameters and just subtract one player life every time you call it
The recoverLife doesn't accept parameters and just adds one player life every time you call it
Rules
The player energy can't be negative
The player energy can't be more than 100
The player lives can't be bigger thant 99
If the player energy is equal or lees than 0 then the player will lose a life
Play Time!!!
Set the player name
Player lose a life
Player lose 10 energy value
Player lose 5 energy value
Player lose 15 energy value
Player lose 20 energy value
Player earn 10 energy value
Player lose 30 energy value
Player lose 40 energy value
Player lose a life
Player wins a life
Player wins a life
Simulate each game play using the players object methods
Show the following output after doing all the object methods calls
The %player name% has %energy% energy % and  %lifes% lifes */


const Player={
    name:'',
    energy:100,
    live:3,
    loseenergy:function(damage){
        this.energy = this.energy - damage
        if(this.energy<=0){
            this.loseLife();
            this.energy=0;
        }
    },
    recoverEnergy:function(energyUp){
        if(this.energy<=100){
            this.energy = this.energy +energyUp;
        }
    },
    loseLife:function(){
        this.live --;
    },
    recoverLife:function(){
        this.live ++;
    }
}
//set the player name
Player.name='Jand';
console.log(`Player name:${Player.name}`);
//player los live
console.log(`Lives: `+ Player.live);
Player.loseLife();
console.log(`Lives: `+ Player.live);
//player los 10 energy
console.log(`Energy: ${Player.energy}`)
Player.loseenergy(10);
console.log(`Energy: ${Player.energy}`);
//player los 5 energy
Player.loseenergy(5);
console.log(`Energy: ${Player.energy}`);
//player los 15 energy
Player.loseenergy(15);
console.log(`Energy: ${Player.energy}`);
//player los 20 energy
Player.loseenergy(20);
console.log(`Energy: ${Player.energy}`);
//player los 10 energy
Player.loseenergy(10);
console.log(`Energy: ${Player.energy}`);
//player los 30 energy
Player.loseenergy(30);
console.log(`Energy: ${Player.energy}`);
//player los 40 energy
Player.loseenergy(40);
console.log(`Energy: ${Player.energy}`);
//Player lose life
Player.loseLife();
console.log(`Live: ${Player.live}`);
console.log(`The '${Player.name}' has '${Player.energy}' Energy and  '${Player.live}' lifes`)

