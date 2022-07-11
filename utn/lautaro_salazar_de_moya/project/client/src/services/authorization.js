const API_URL = process.env.REACT_APP_API_BACKEND || "/api/v1";
const API_AUTH_URL = API_URL + "/auth";
const API_USER_URL = API_URL + "/user"

export const handleLogin = async (email, password) => {
  const data = { email, password };

  const response = await fetch(API_AUTH_URL + "/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const jsonData = await response.json();

  if (jsonData.error) throw jsonData.error;

  const body = jsonData.body;

  const { token } = body;

  if (!token) throw "Its necessary a token in the response";

  saveToken(token);

  return jsonData.message;
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const validateToken = async (token)=>{
    // Fetch to my own api server
    const getProfile = await fetch(`${API_USER_URL}/profile?token=${token}`)
    const json = await getProfile.json()
    const result = json.body
    
    return result;
  }