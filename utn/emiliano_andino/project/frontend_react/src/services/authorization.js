import {API_URL} from "./apiServer"
const API_AUTH_URL = API_URL + "/auth";

export const handleLogin = async (email, password) => {

    const data = { email, password };

    const response = await fetch(API_AUTH_URL + "/login", {
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

    const body = jsonData.body;

    const {token} = body;

    if(!token)
        throw "Its necessary a token in the response";
    
    saveToken(token);

    return jsonData.message;
}

export const handleRegister = async (name, email, password, avatar, image) => {

    const data = {name, email, password, avatar, image };
    const response = await fetch(API_AUTH_URL + "/register", {
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

    const body = jsonData.body;

    const {token} = body;

    if(!token)
        throw "Its necessary a token in the response";
    
    saveToken(token);

    return jsonData.message;
}

export const saveToken = (token)=>{
    localStorage.setItem('token',token);
    console.log(token)
}

export const getToken = ()=>{
    return localStorage.getItem('token');
    console.log(localStorage.getItem('token'));
}

