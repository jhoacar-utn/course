const API_URL = process.env.REACT_APP_API_URL || "/api/v1";
const USER_API_URL = API_URL + "/user";

//esto no lo pude terminar al no funcionarme la ruta /user/profile

/*
    Comentarios a realizar con respecto a la implementacion de este servicio
    fijate que tenes una peticion fetch y esa peticion se esta realizando
    con metodo POST y tu backend solo lo tiene habilitado por verbo GET,
    eso en primer lugar, en segundo lugar lo que debes enviar seria
    un token, no el name y email, el token lo deberias extraer del
    localStorage de la manera como se guardo. -- OK corregido --

    Fijate que tenes definida una funcion que esta authorization.js
    para getToken(), entonces lo que debes hacer es usarla,
    esta function getUser no deberia recibir ningun parametro! ---- OK agregado --

    El metodo fetch seria de la siguiente manera

    const USER_API_URL = API_URL + "/user";
    const token = getToken();
    const response = await fetch(USER_API_URL+"/profile?token="+token);
    ...
    
*/

export const getUserData = async function(){

    const token =  localStorage.getItem('token');

    const response = await fetch(USER_API_URL+"/profile?token="+token);
    
    const jsonData = await response.json();

    if(jsonData.error)
        throw jsonData.error;

    return jsonData.body;
}