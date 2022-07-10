import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useContext, useEffect, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { AppContext } from "../../context/store";
import { getPokemons } from "../../services/api";
import { changeAvatarAndImage, changeEmail, changeName, changePassword } from "./actions";
import { reducerFunction } from "./reducer";
import styles from "./styles.module.css";
import { toast } from 'react-hot-toast';
import { handleRegister } from '../../services/authorization';

/*

 REDUX:

 store -> Es el lugar donde se almacena toda la informacion, es decir, un objeto global

 actions -> Son aquellas funciones que seran las encargadas de recibir la informacion para actualizar
    
 reducers -> Son aquellas funciones que reciben la informacion de los actions y cambian el store

 */


function Register() {

    const [avatars, setAvatars] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false)

    const [registerState, setRegisterState] = useReducer(reducerFunction, {
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    });

    // El primer parametro sera la callback a ejecutar y el segundo parametro sera un array de las dependencias
    // Estas dependencias seran las variables que le diran al useEffect que cuando cambian se volvera a disparar dicha callback
    useEffect(() => {

        const fetchingData = async () => {
            try {
                const result = await getPokemons();
                setAvatars(result);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchingData();

    }, []);

    const { name, email, password, avatar, image } = registerState;

    const handleSubmit = (event) => {

        event.preventDefault();

        const data = {
            name,
            email,
            password,
            avatar,
            image
        };

        handleRegister(data)
            .then((response) => {

                setIsRegistered(true);
                /*
                Aca no entiendo el porque utilizas un metodo llamado redirect,
                este metodo capaz lo entiendas por como trabajamos en el backend
                pero resulta que en react para hacer esta redireccion no se hace
                de la misma manera, ademas trata de interpretar lo que estaria
                pasando, fijate que la variable 'response' sera el contenido 
                que devolvera cuando se resuelva la promesa de handleRegister,
                seria nada mas y nada menos lo que devuelve la funcion cuando se
                ha completado, que si vamos al codigo seria el 'return jsonData.message;'
                entonces es un 'string' y un 'string' no tiene el metodo .redirect


                Para hacer este tema de redirect to login hay que hacerlo como
                hicimos el redirect hacia el dashboard.
                
                Crearemos un estado interno aca que se llame:
                    
                    - const [isRegistered, setIsRegistered] = useState(false);

                Y aca seria donde lo asignamos a 'true', ( setIsRegistered(true) )
                de modo que cuando vayamos a volver a renderizar este componente 
                de registro, tengamos algo como esto:

                     <>
                        {isRegistered && <Navigate to="/login" replace={true} />}
                        <Layout>
                            ...
                        </Layout>
                    </>

                
                Esto evidenteme verifica la variable y como se hizo a 'true'
                renderiza una navegacion para ir hacia el '/login', hay otras
                maneras pero esta fue la que vimos en clase   --PERFECTO ME ANDUVO OK!!!
                */

                toast.success("User registered successfully");
            })
            .catch((error) => {
                /**
                Aca luego de haber algun error en el registro mostrara un error
                por el toast pero que pasara si por ejemplo
                el error es un objeto o cualquier cosa que venga por
                el metodo catch, es decir, cualquier cosa podria atrapar

                Lo recomendable seria directamente colocarle en el toast
                lo unico que puedo colocarle que seria algo que se pueda
                renderizar en react, puede ser un 'string' o un 'jsx'

                Lo que te aconsejo es que muestres por consola el error
                y por el toast un string que diga por ejemplo 'user not registered'

                    console.log(error);
                    toast.error('User not registered'); --OK Cambiado--

                 */
                console.log(error);
                toast.error('User not registered');
            })

    }

    const handleChangeEmail = (event) => {

        setRegisterState(changeEmail(event.target.value));
        // setRegisterState({
        //     ...registerState, // El spread operator coloca en una linea todos los atributos del objeto
        //     // name:"", email: "", ....
        //     email: event.target.value,
        // })
    }

    const handleChangePassword = (event) => {

        setRegisterState(changePassword(event.target.value));
        // setRegisterState({
        //     ...registerState,
        //     password: event.target.value
        // })

    }

    const handleChangeName = (event) => {

        setRegisterState(changeName(event.target.value));
        // setRegisterState({
        //     ...registerState,
        //     name: event.target.value,
        // })
    }

    const handleChangeAvatar = (event) => {

        const newAvatar = event.target.value;
        const avatarObject = avatars.find((element) => {
            return element.name === newAvatar;
        });
        const newImage = avatarObject.image;

        setRegisterState(changeAvatarAndImage(newAvatar, newImage));
        // setRegisterState({
        //     ...registerState,
        //     avatar: newAvatar,
        //     image: newImage,
        // })
    }


    return (
        <>
            {isRegistered && <Navigate to="/login" replace={true} />}
            <Layout>
                <Card sx={{
                    minHeight: 400,
                    minWidth: 400,
                }} >
                    <form onSubmit={handleSubmit}>
                        <CardContent sx={{
                            minHeight: 400,
                            minWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "50px"
                        }}>

                            <FormControl sx={{ width: "50%" }}>
                                <InputLabel>User Name</InputLabel>
                                <Input type="text" value={name} onChange={handleChangeName} />
                                <FormHelperText>Please type your user name.</FormHelperText>
                            </FormControl>

                            <FormControl sx={{ width: "50%" }}>
                                <InputLabel>Email Address</InputLabel>
                                <Input type="email" value={email} onChange={handleChangeEmail} />
                                <FormHelperText>We'll never share your email.</FormHelperText>
                            </FormControl>

                            <FormControl sx={{ width: "50%" }}>
                                <InputLabel>Password</InputLabel>
                                <Input type="password" value={password} onChange={handleChangePassword} />
                                <FormHelperText>Please type your password.</FormHelperText>
                            </FormControl>
                            <FormControl sx={{ width: "70%" }}>
                                <InputLabel id="avatar">User Avatar</InputLabel>
                                <Select
                                    className={styles.select}
                                    labelId="avatar"
                                    value={avatar}
                                    label="User Avatar"
                                    onChange={handleChangeAvatar}
                                >
                                    {avatars.map(element => {
                                        return (
                                            <MenuItem sx={{ textTransform: 'capitalize' }} value={element.name}>
                                                <Typography component="span">{element.name}</Typography>
                                                <img src={element.image} alt={element.name} width={50} height={50} />
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                                <FormHelperText>Please select your avatar.</FormHelperText>
                            </FormControl>
                            <FormControl sx={{
                                marginTop: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex"
                            }}>
                                <Button type="submit" sx={{
                                    padding: '10px 20px'
                                }}>
                                    Register
                                </Button>
                            </FormControl>
                        </CardContent>
                    </form>

                </Card>
            </Layout>
        </>
    )
}

export default Register;