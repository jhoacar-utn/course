
const setCookie = (request,token)=>{
    request.session.mytoken = token;
}

module.exports = {
    setCookie
}