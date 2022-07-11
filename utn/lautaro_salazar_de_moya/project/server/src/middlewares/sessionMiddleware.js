const { tokenVerify } = require('../helpers/handleJwt');

const sessionMiddleware = async (req,res,next)=>{
    const token = req.query.token

    if(!token){
        res.status(412).send({ "error":"Token undefined" });
    }

    try {

        const usrData = await tokenVerify(token)

        if(!usrData){
            res.status(401).send({ "error":"invalid token" });
            return
        }else{
            req.user = usrData;
        
            next()
        }
    

    } catch (error) {
        res.status(500).send({ error:error });
    }
};

module.exports= {
    sessionMiddleware
}