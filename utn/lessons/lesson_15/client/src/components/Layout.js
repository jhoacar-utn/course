import { Card } from "@mui/material";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {

    return (
        <>
            <NavBar></NavBar>
            <Card sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight:"80vh"
            }}>
                {children}
            </Card>
            <Footer></Footer>
        </>
    );
}

export default Layout;