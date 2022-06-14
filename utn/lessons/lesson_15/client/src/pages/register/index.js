import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { AuthorizationContext } from "../../context/authorization";


function Register() {

    const { isLoggedIn } = useContext(AuthorizationContext);

    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
        image: ""
    });

    const { name, email, password, avatar, image } = registerState;

    const handleSubmit = (event) => {
        console.log(event);
    }

    const handleChangeEmail = (event) => {

        setRegisterState({
            ...registerState, // El spread operator coloca en una linea todos los atributos del objeto
            email: event.target.value,
        })
    }

    const handleChangePassword = (event) => {

        setRegisterState({
            ...registerState,
            password: event.target.value
        })

    }

    const handleChangeName = (event) => {

        setRegisterState({
            ...registerState,
            name: event.target.value,
        })
    }

    const handleChangeAvatar = (event) => {

        setRegisterState({
            ...registerState,
            avatar: event.target.value,
        })
    }


    return (
        <>
            {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
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