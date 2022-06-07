import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import Layout from "../components/Layout";
import { handleLogin } from "../services/authorization";

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasErrorLogin, setHasErrorLogin] = useState(false);
    const [errorMessageLogin, setErrorMessageLogin] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
    }

    const handleChangePassword = (event)=>{
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        

        handleLogin(email, password)
        .then((response)=>{
            console.log(response);
            toast.success("Logged successfully");
        })
        .catch((error)=>{
            console.log(error);
            toast.error("An error has ocurred in the login");
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
                            <Box>
                                <FormControl>
                                    <InputLabel>Email Address</InputLabel>
                                    <Input type="email" value={email} onChange={handleChangeEmail}/>
                                    <FormHelperText>We'll never share your email.</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <InputLabel>Password</InputLabel>
                                    <Input type="password" value={password} onChange={handleChangePassword}/>
                                    <FormHelperText>Please type your password.</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                marginTop: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex"
                            }}>
                                <Button type="submit" sx={{
                                    padding:'10px 20px'
                                }}>
                                    Log In
                                </Button>
                            </Box>
                            {hasErrorLogin &&
                                <Typography color="error">
                                    {errorMessageLogin}
                                </Typography>
                            }
                        </CardContent>
                    </form>

                </Card>
            </Layout>
        </>
    )
}

export default Login;