import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import AuthContext from "../context/AuthContext";

function Logout() {
  const [token, setToken] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    setToken(null);
    navigate("/");
  }, []);

  return (
    <>
      <Heading>Log Out</Heading>
      <Paragraph>Logging you out...</Paragraph>
    </>
  );
}

export default Logout;
