import { useContext, useEffect, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { AuthorizationContext } from "../../context/authorization";
import { AppContext } from "../../context/store";
import { getPokemons } from "../../services/api";
import { handleRegister } from "../../services/Register";
import {
  changeAvatarAndImage,
  changeEmail,
  changeName,
  changePassword,
} from "./actions";
import { reducerFunction } from "./reducer";

function Register() {
  const { isLoggedIn } = useContext(AppContext);
  const [avatars, setAvatars] = useState([]);

  const [errors, setErrors] = useState(false);

  const [registerState, setRegisterState] = useReducer(reducerFunction, {
    name: "",
    email: "",
    password: "",
    avatar: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const result = await getPokemons();
        setAvatars(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchingData();
  }, []);

  const { name, email, password, avatar, image } = registerState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleRegister(registerState);

    if (response.err) {
      setErrors(response.err)
      toast.error(response.err)
      return;
    }

    return navigate("/"), toast.success(`Usuario registrado correctamente`)
  };

  const handleChangeEmail = (event) => {
    setRegisterState(changeEmail(event.target.value));
  };

  const handleChangePassword = (event) => {
    setRegisterState(changePassword(event.target.value));
  };

  const handleChangeName = (event) => {
    setRegisterState(changeName(event.target.value));
  };

  const handleChangeAvatar = (event) => {
    const newAvatar = event.target.value;
    const avatarObject = avatars.find((element) => {
      return element.name === newAvatar;
    });
    const newImage = avatarObject.image;
    setRegisterState(changeAvatarAndImage(newAvatar, newImage));
  };

  return (
    <>
      {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
      <Layout>
        <div className="my-5 card align-self-center shadow-lg">
          <div className="card-header">
            <h5 className="card-title text-center">Registrate</h5>
          </div>
          <div className="card-body align-self-center">
            {errors? <p className="card-text text-danger">
            <strong>Error: {errors}</strong>
            </p>:
            <p className="card-text">
              Ingresá tus datos y participá de esta app!
            </p>
            }


            <form onSubmit={handleSubmit} className="text-center">
              <div className="input-group input-group-sm mb-3 shadow-sm">
                <span className="input-group-text">Nombre</span>
                <input
                
                  type="text"
                  className=" form-control"
                  placeholder="Andrea"
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="input-group input-group-sm mb-3 shadow-sm">
                <span className="input-group-text">Email</span>
                <input
                
                  type="email"
                  className=" form-control"
                  placeholder="email@ejemplo.com"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="input-group input-group-sm mb-3 shadow-sm">
                <span className="input-group-text">contraseña</span>
                <input
                
                  type="password"
                  className=" form-control"
                  placeholder="contraseña"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>

              <select
                className="form-select form-select-sm mb-2 col-9"
                value={avatar}
                onChange={handleChangeAvatar}
              >
                <option key="0" defaultChecked>
                  Elegí tu Avatar
                </option>

                {avatars.map((element) => {
                  return (
                    <option key={element.name} value={element.name}>
                      {element.name}
                    </option>
                  );
                })}
              </select>

              {registerState.image && (
                <img
                  src={registerState.image}
                  height="130px"
                  className="my-3 card-img-bottom"
                  alt={registerState.name}
                />
              )}

              <button
                className="my-1 btn btn-outline-primary btn-sm w-50"
                type="submit"
              >
                Aceptar
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Register;
