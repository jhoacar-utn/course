import { Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Layout from "../components/Layout";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {

        console.log("Enviar formulario")
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
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
                                <Input id="email" name="email" aria-describedby="email-helper" />
                                <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <InputLabel htmlFor="email">Password</InputLabel>
                                <Input id="password" name="password" aria-describedby="password-helper" />
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
                                color: 'text.primary'
                            }}>
                                <Input type="submit" value="Log In" />
                            </Button>
                        </Box>
                    </CardContent>
                </form>
            </Card>
        </Layout>
    )
}

export default Login;