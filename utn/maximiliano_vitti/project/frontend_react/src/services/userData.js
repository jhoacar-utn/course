const API_URL = process.env.REACT_APP_API_URL || "/api/v1";
const API_AUTH_URL = API_URL + "/user/profile";

//esto no lo pude terminar al no funcionarme la ruta /user/profile

export const getUser = async function(name, email){

    const data = {name, email}

    const response = await fetch(API_AUTH_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    
    const jsonData = await response.json();

    if(jsonData.error)
        throw jsonData.error;

    return jsonData.message;
}