import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { handleLogin } from "../services/authorization";

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasErrorLogin, setHasErrorLogin] = useState(false);
    const [errorMessageLogin, setErrorMessageLogin] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();
        const elementForms = event.target.elements;
        const email = elementForms.email.value;
        const password = elementForms.password.value;

        const responseLogin = handleLogin(email, password);

        if (responseLogin.error) {
            setHasErrorLogin(true);
            setErrorMessageLogin(responseLogin.error);
        }
        else {
            setIsLoggedIn(true);
        }

        console.log(email, password);

    }

    return (
        <>
            {isLoggedIn && <Navigate to="/dashboard" replace={true} />}
            <Layout>
                <Card sx={{
                    minHeight: 400,
                    minWidth: 400,
                    bgcolor: 'info.main'
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
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input type="email" id="email" name="email" aria-describedby="email-helper" />
                                    <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <InputLabel htmlFor="email">Password</InputLabel>
                                    <Input type="password" id="password" name="password" aria-describedby="password-helper" />
                                    <FormHelperText id="password-helper">Please type your password.</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                marginTop: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex"
                            }}>
                                <Button sx={{
                                    color: 'text.primary',
                                }}>
                                    <Input type="submit" value="Log In" />
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