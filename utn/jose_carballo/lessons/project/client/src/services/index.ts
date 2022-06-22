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

export const sendProfiler = async(token:any) =>{
    try {
        await axios.post(`${url}/user/profiler`,{
            header:{
                token
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const addTokenCredential = (token:any) => localStorage.setItem('token',token);

export const getTokenCredencial = () => localStorage.getItem('token');

export const logoutTokenCredential = () => localStorage.removeItem("token");
  
export const getTypeInput = (_type:String, input?:String, password?:String, email?:String, select?:String, number?:any) => {
    return _type === input || _type === password || _type === email || _type === select || _type === number
};
    

