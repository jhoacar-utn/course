
exports.setCookie = (request,token)=>{
    request.session.userToken = token;
}