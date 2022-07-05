import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useContext, useEffect, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { AppContext } from "../../context/store";
import { getPokemons } from "../../services/apiPokemon";
import { changeAvatarAndImage, changeEmail, changeName, changePassword } from "./actions";
import { reducerFunction } from "./reducer";
import styles from "./styles.module.css";
import { handleRegister } from "../../services/authorization";
import { changeLoggedIn } from "../../redux/actions/globalActions";
import { toast } from 'react-hot-toast';

/*

 REDUX:

 store -> Es el lugar donde se almacena toda la informacion, es decir, un objeto global

 actions -> Son aquellas funciones que seran las encargadas de recibir la informacion para actualizar
    
 reducers -> Son aquellas funciones que reciben la informacion de los actions y cambian el store

 */


function Register() {

    const [avatars, setAvatars] = useState([]);
    const { isLoggedIn, dispatch } = useContext(AppContext);

    const [registerState, setRegisterState] = useReducer(reducerFunction, {
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    });

    const fetchingData = async () => {
        try {
            const result = await getPokemons();      
            setAvatars(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    // El primer parametro sera la callback a ejecutar y el segundo parametro sera un array de las dependencias
    // Estas dependencias seran las variables que le diran al useEffect que cuando cambian se volvera a disparar dicha callback
    useEffect(() => {        

        fetchingData();

    }, []);

    const handleOpenSelect = () =>{
        fetchingData();
    }
    const { name, email, password, avatar, image } = registerState;

    const handleSubmit = (event) => {
        
        event.preventDefault();
        let PuedeRegistrar = true;
        if(name === "" || email === "" || password=== "" || avatar==="")
        {
            PuedeRegistrar = false;
            toast.error("Faltan completar campos");
        }
        if(PuedeRegistrar)
        {
            handleRegister(name, email, password, avatar, image )
            .then((response) => {
                dispatch(changeLoggedIn(true));
                toast.success("Logged successfully");
            })
            .catch((error) => {
                toast.error(`Error: ${error}`);
            })
        }
    }

    const handleChangeEmail = (event) => {
        setRegisterState(changeEmail(event.target.value));
    }
    const handleChangePassword = (event) => {
        setRegisterState(changePassword(event.target.value));
    }
    const handleChangeName = (event) => {
        setRegisterState(changeName(event.target.value));
    }
    const handleChangeAvatar = (event) => {

        const newAvatar = event.target.value;
        const avatarObject = avatars.find((element) => {
            return element.name === newAvatar;
        });
        const newImage = avatarObject.image;
        setRegisterState(changeAvatarAndImage(newAvatar, newImage));
    }
    return (
        <>
            {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
            <Layout>
                <Card sx={{
                    minHeight: 400,
                    minWidth: 400,
                    borderRadius: 2,
                    boxShadow: 1,
                    borderBottom: 2,
                    borderColor: 'primary.main'
                }} >
                    <form onSubmit={handleSubmit}>
                        <CardContent sx={{
                            minHeight: 400,
                            minWidth: 400,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "30px"
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
                                    onOpen={handleOpenSelect}
                                >
                                    {avatars.map(element => {
                                        return (
                                            <MenuItem sx={{ textTransform: 'capitalize' }}  value={element.name}>
                                                <Typography component="span" >{element.name}</Typography>
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