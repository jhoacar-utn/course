
exports.getUsers = (req,res,next)=>{

    const userData = req.query;

    return res.json(userData);
}

exports.postUser = (req,res,next)=>{
    
    const userData = req.body;

    console.log(userData);

    return res.json(userData);
}
