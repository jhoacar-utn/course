const postUser = (req,res,next)=>{
    
    const userData = req.body;

    console.log(userData)

    return res.json(userData);
}
module.exports.postUser = postUser;