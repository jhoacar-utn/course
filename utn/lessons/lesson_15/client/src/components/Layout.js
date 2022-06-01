import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({children}) {

    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>
    );
}

export default Layout;