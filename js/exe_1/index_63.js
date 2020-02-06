//exe_63
/* Define year variable and assign a number between 2006 and 2017
Define champion variable and assing a value between 2006 and 2017
Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
Use a switch statement to check for the selected year value `` 2017 - Pittsburgh Penguins 2016
 - Pittsburgh Penguins 2015 - Chicago Blackhawks 2014 - Los Angeles Kings 2013 - Chicago Blackhawks
  2012 - Los Angeles Kings 2011 - Boston Bruins 2010 - Chicago Blackhawks 2009 - Pittsburgh Penguinas 2008
   - Detroit Red Wings 2007 - Anaheim Ducks 2006 - Carolina Hurricanes */

let year = 2008;
let champion = 2007;

if(year > 2017 && year < 2006){
    console.log(`Sorry, Please try a differnt year`);
}
switch(year){
    case 2007:
        console.log(`${year} - Pittsburgh Penguins ${champion}`);
        break;
    case 2008:
        console.log(`${year} - Los Angeles Kings ${champion}`);
        break;
    default:
        console.log("invalid entry please try again!!");
}

