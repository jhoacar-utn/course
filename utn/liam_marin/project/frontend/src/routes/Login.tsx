import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Heading from "../components/Heading";
import LoginForm from "../components/LoginForm";
import AuthContext from "../context/AuthContext";

function Login() {
  const [token] = useContext(AuthContext);
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="max-w-prose mx-auto px-4">
      <Heading>Login</Heading>
      <div className="border p-6 rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
