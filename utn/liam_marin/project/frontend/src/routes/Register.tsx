import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import Heading from "../components/Heading";
import RegisterForm from "../components/RegisterForm";

function Register() {
  const [token] = useContext(AuthContext);
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="max-w-prose mx-auto px-4">
      <Heading>Register</Heading>
      <div className="border p-6 rounded-lg">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
