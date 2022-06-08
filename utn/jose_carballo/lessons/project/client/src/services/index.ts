import axios from 'axios';


const url = process.env.REACT_APP_API_URL;


export const createAvatar = (objeto:any) => {
        axios.post(`${url}/auth/register`,objeto)
}

export const getAvatarBD = async() => {
    const response = await axios.get(`${url}/users`);
    return response;
}