/* Define a showName variable and assign a function as value
When the showName function get executed it will print your name with the following output format:
===========
= Nicolás =
===========
Call the showName at least 2 times */


function names(){
    let heading = '';
    //console.log(heading);
      for(let index1 =1; index1<=3;index1++){
             if(index1==2){
                console.log('= ComIT =');
            }else {
                    heading ='';
                for(let index2=1;index2<=9;index2++){
                    heading += '=';
                }
                console.log(heading);
            }
    }  
}
console.log(names());