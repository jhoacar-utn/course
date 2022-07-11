import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Layout from "../components/Layout";
import { handleLogin } from "../services/authorization";
import { AppContext } from "../context/store";
import { changeLoggedIn, loadUserData } from "../redux/actions/globalActions";

function Login() {
  const { isLoggedIn, loadUserData, dispatch } = useContext(AppContext);

  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin, setErrorMessageLogin] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setErrorMessageLogin("")
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setErrorMessageLogin("")
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email, password)
      .then((response) => {
        dispatch(changeLoggedIn(true));
        toast.success(response);
        window.location.reload(true)
      })
      .catch((error) => {
        console.log(error);
        setHasErrorLogin(true);
        setErrorMessageLogin(error);

        toast.error(error);
      });
  };

  return (
    <>
      {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
      <Layout>
        <div className="my-5 card align-self-center shadow-lg">
          <div className="card-header text-center text-primary">
            <h4 className="card-title">Inicia sesión</h4>
          </div>
          <div className="card-body align-self-center">
            {hasErrorLogin ? (
              <p className="card-text text-danger">{errorMessageLogin}</p>
            ) : (
              <p className="card-text">Ingresa tus credenciales para acceder</p>
            )}

            <form className="" onSubmit={handleSubmit}>
              <div className="input-group mb-3 shadow-sm">
                <span className="input-group-text">Email</span>
                <input
                  autoComplete="on"
                  required
                  type="email"
                  className="form-control"
                  placeholder="email@ejemplo.com"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="input-group mb-3 shadow-sm">
                <span className="input-group-text">contraseña</span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="contraseña"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
              <button className="btn btn-outline-primary" type="submit">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
