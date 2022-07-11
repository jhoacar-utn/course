
const API_URL = process.env.REACT_APP_API_BACKEND + "/auth" || "/api/v1";

export const handleRegister = async (data) => {
  const userToRegister = data;

  const response = await fetch(API_URL + "/register", {
    method: "POST",
    body: JSON.stringify(userToRegister),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const jsonData = await response.json();

  return jsonData;

};
