const greet=(paramet1,paramet2,callback)=>{
    
    console.log(`Hi ${paramet1} ${paramet2}`);
    return callback();
};


module.exports=greet;
