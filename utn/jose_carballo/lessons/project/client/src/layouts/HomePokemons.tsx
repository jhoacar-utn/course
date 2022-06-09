import { Outlet } from "react-router-dom";
// import { CustomGridCard } from "../components/CustomGridCard"
import Navbar from "../components/Navbar";
import "./styles.scss";

export const HomePokemons = () => {
  return (
    <>
      <Navbar />
      <div className="dasboard">
        <h1 className="title_main">
          Bienvenidos a la Apalicación de Personajes
        </h1>
      </div>
            <Outlet />
    </>
  );
};
