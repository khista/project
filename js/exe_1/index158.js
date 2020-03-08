let budget = 0;
let cons = ['PS4','XBOX'];
const Games=
[
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price:1060,
        sold:20,
        console:'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Lego Marvel Super Heroes',
        price:700,
        sold:25,
        console:'XBOX',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }

    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }

    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'XBOX',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'XBOX',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }

        
    },
    {   name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail:function(){
            console.log("--------------------");
            console.log('Name: '+this.name);
            console.log('Price: '+this.price);
            console.log('Sold: '+this.sold);
            console.log('Console: '+this.console);
        }
    }
    
];

let GameFilter=Games.filter(function(game){
    budget += game.price;
    return game.console==cons[0];
});

GameFilter.forEach(function(game){
    game.showDetail();
});

console.log(`I need ${budget} CAD to get all this PS4 great games!!`);

const gameName=[];
Games.forEach(function(game,index){
    gameName.push(game.name);
});
 
const gamePrice =[];
Games.forEach(function(game){
    gamePrice.push(game.price);
});

console.log('-----------Game Names---------');
console.log(gameName);
console.log('------------Game Price--------');
console.log(gamePrice);