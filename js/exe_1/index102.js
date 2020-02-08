/* Define a showName variable and assign a function as value
When the showName function get executed it will print your name with the following output format:
===========
= Nicolás =
===========
Call the showName at least 2 times */


function names(){
    let heading = '';
    /* for(let index1 =1; index1<=5;index1++){
        for(let index2=1;index2<=12;index2++){
            if(index1==2 && index2==1){
                console.log('\n')
            }else if(index1=4 && index2==1){
                 console.log(' ')
            }else if(index1==3 && index2==2){
                console.log('ComIT');
            }else
            console.log('=');
             
        }
    } */
    for(let index1 =1; index1<=3;index1++){
             if(index1==2){
                console.log('= ComIT =');
            }else {
                if(heading){
                    heading ='';
                }
                for(let index2=1;index2<=5;index2++){
                    heading += '=';
                }
                console.log(heading);
            }
    }
}
console.log(names());