
const getUsers = (req,res,next)=>{

    const userData = req.query;

    return res.json(userData);
}

const postUser = (req,res,next)=>{
    
    const userData = req.body;

    console.log(userData)

    return res.json(userData);
}

module.exports.getUsers = getUsers;
module.exports.postUser = postUser;