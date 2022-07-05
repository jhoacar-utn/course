export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";
const API_AUTH_URL = API_URL + "/user";


export const getPokemonsUsed = async function(){

    const response = await fetch(`${API_AUTH_URL}/avatar`);
    const json = await response.json();
    const results = json.body;

    return results;
}
export const getUser = async (token) => {        
    const response = await fetch(`${API_AUTH_URL}/profile?token=${token}`);
    const jsonData = await response.json();
    
    if(jsonData.error)
        throw jsonData.error;

    const body = jsonData.body;
    
    if(!body)
        throw "Its necessary a token in the response";
    
    
    return body;
}