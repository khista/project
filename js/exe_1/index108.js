/* 
Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true 
*/
let sortNumber = function(number1,number2,number3,v,c,d,t){
      let list =[number1,number2,number3,v,c,d,true];
      for(let i=1;i<list.length;i++){
          let key = list[i]; //9
          j=i-1; //0
          while(j>=0 && key < list[j]){
               //swp
               let temp = list[j];//10
               list[j] = list[j+1];//9
               list[j+1] =temp;//10
                
          j--;
          
          }
           
          }
          return list;
      }

console.log(sortNumber(10,9,21,23,4,5,true));