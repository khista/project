//exe_61
/* Define weekdayNumber and assign a numeric value between 1 and 7
If weekday number is 1 show the following message: Today it's Monday
If weekday number is 2 show the following message: Today it's Tuesday
If weekday number is 3 show the following message: Today it's Wednesday
If weekday number is 4 show the following message: Today it's Thursday
If weekday number is 5 show the following message: Today it's Friday
If weekday number is 6 show the following message: Today it's Saturday
If weekday number is 7 show the following message: Today it's Sunday
If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7 */

let weekday=1;

//if condation 
if(weekday==1){
    console.log(`Today ti's Mondday`);
}else if(weekday ==2){
    console.log(`Today it's Tuesday`);
}else if(weekday ==3){
    console.log(`Today it's Wednesday`);
}else if (weekday ==4){
    console.log(`Today it's Thursday`);
}else if(weekday == 5){
    console.log(`Today it's Friday`);
}else if(weekday ==6 ){
    console.log(`Today it's Saturday`);
}else if(weekday ==7){
    console.log(`Today it's Suday`);
}else if(weekday>=8 && weekday<=0){
    console.log(`Invalid entry, please enter valid input`);
}

//switch condation

switch(weekday){
    case 1:
        console.log(`Today it's Monday`);
        break;
    case 2:
        console.log(`Today it's Tuesday`);
        break;
    case 3: 
        console.log(`Today it's Wednesday`);
        break;
    case 4:
        console.log(`Today it's Thursday`);
        break;
    case 5:
        console.log(`Today it's friday`);
        break;
    case 6:
        console.log(`Today it's Saturday`);
        break;
    case 7:
        console.log(`Today it's Sunday`);
        break;
    default:
        console.log(`Invalid entry, pleae enter valid input`);
        
}