import { Button, Card, CardContent, Input } from "@mui/material";
import { Box } from "@mui/system";
import Layout from "../components/Layout";


function Login() {

    return (
        <Layout>
            <Card sx={{ maxWidth: 275 }} >
                <CardContent>
                    <Box component="form">
                        <div>
                            <Input type="email"></Input>
                        </div>
                        <div>
                            <Input type="password"></Input>
                        </div>
                        <div>
                            <Button>Log In</Button>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Layout>
    )
}

export default Login;