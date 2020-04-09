const fs =require('fs');
fs.rename('osama.txt','exampe.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('renamede');
});
