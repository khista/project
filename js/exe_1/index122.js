/* Create a new index122.js file
Define a ingredients array and assign the following values:
Potato
Pomato
Chicken
Lettuce
Beef
Carrots
Cucumber
Define a new array with the name vegetarian and assign only the items from the ingridient array (using indexes) that should 
belong in the vegetarian list
Show the ingredients list as output
Show the vegetarian list as output
Now I'm hungry! */
const ingredients =['Potato',
    'Pomato',
    'Chicken'
    ,'Lettuce'
    ,'Beef'
    ,'Carrots'
    ,'Cucumber'];

    console.log(ingredients);
    console.log('--------------after-----------');

    const vegetarian =[];

    for(let x =0;x<ingredients.length;x++){
        vegetarian[x]=ingredients[x];
    }

    for(let x =0;x<ingredients.length;x++){
        console.log(ingredients[x]);
    }
    console.log('---------after------------');
    for(let x =0;x<ingredients.length;x++){
        console.log(vegetarian[x])
    }