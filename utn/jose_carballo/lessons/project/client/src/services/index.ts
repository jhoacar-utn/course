import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const createAvatar = (objeto:any) => {
    return  axios.post(`${url}/auth/register`,objeto)
}

export const getAvatarBD = async() => {
    return await axios.get(`${url}/users`);
}

export const authLogin = async(obj: any) => {
    try {
        return await axios.post(`${url}/auth/login`, obj)
    } catch (error) {
        throw new Error('Usuario no registrado')
    }
}
