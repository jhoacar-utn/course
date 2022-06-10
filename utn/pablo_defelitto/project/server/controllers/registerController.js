const response =(req,res,next)=>{
    console.log("funciona");
    return res.send("funciona");
       
}

module.exports = response;