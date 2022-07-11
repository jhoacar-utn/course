import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {

  return (
    <>
      <NavBar></NavBar>
      <main className="container-fluid d-flex justify-content-center bg-secondary">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
