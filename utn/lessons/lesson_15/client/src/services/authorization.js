const API_URL = process.env.REACT_APP_API_URL || "/api/v1";
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

    return jsonData.message;
}