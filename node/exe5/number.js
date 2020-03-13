const getnumber = function (num){
    const Logger = require('logplease');
    const getErr =Logger.create('Name: Error');
    if(num % 2 ==0 ){
        return `Number is Even ${num}`;
    }else{
        
        getErr.error('this number is odd');
        return `Number is odd ${num} and `;
    }
   
};



module.exports=getnumber;
