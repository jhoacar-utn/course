
const getUsers = (req,res,next)=>{
    return res.send("All users");
}

const postUser = (req,res,next)=>{
    return res.send("User added");
}

module.exports.getUsers = getUsers;
module.exports.postUser = postUser;