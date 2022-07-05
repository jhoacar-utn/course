import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../context/store";
import {  Card, CardContent, FormControl,  Input, Typography   } from "@mui/material";

import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "../services/authorization";
import {getUser} from "../services/apiServer"

function Dashboard (){
    const{isLoggedIn, dispatch} = useContext(AppContext)
    const[userState, setUserState] = useState({
        name: "",
        email: "",
        avatar: "",
        image: ""
    })
    const fetchingData = async () => {
        try {                
            const user = await getUser(getToken());
            setUserState(user)
        }
        catch (error) {
            console.log(error);
        }
    }    
    
    useEffect(() => {
        fetchingData();       
    }, []);
    const { name, email,  avatar, image } = userState;
    return (
        <>
       {isLoggedIn }
        <Layout>
            <Card sx={{
                   minHeight: 400,
                   minWidth: 300,
                   borderRadius: 2,
                   boxShadow: 1,
                   borderBottom: 2,
                   borderColor: 'primary.main'
                }} >
                    <form >
                        <CardContent sx={{
                            minHeight: 400,
                            minWidth: 300,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "30px"
                        }}>            
                        <FormControl sx={{ width: "50%",alignItems: "center", justifyContent: "center" }}>
                            <img src={image} alt={image} width={200} height={200} />
                            <Typography variant="h4" component="div">{avatar.toUpperCase()}</Typography>                          
                        </FormControl>
                        <FormControl sx={{ width: "50%", alignItems: "center", justifyContent: "center" }}>                
                        <Typography variant="h6" component="div">{name.toUpperCase()}</Typography>                
                        </FormControl>
                        <FormControl sx={{ width: "50%", alignItems: "center", justifyContent: "center" }}>                
                        <Typography variant="h6" component="div">{email.toLocaleLowerCase()}</Typography>           
                        </FormControl>
                        </CardContent>
                    </form>

                </Card>

                
        </Layout>
        </>
    )
}

export default Dashboard;