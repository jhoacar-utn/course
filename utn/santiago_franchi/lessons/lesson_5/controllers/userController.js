
const getUsers = (req,res,next)=>{
    return res.send("All users")
}


const postUser = (req,res,next)=>{

    const userData = req.body;

    return res.json(userData)
}


module.exports.getUsers = getUsers
module.exports.postUser = postUser