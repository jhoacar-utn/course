import { Outlet } from "react-router-dom";
import "./styles.scss";

export const HomePokemons = () => {
  return (
      <div className="dasboard">
        <h1 className="title_main">
          Bienvenidos a la Apalicación de Personajes
        </h1>
        <Outlet />
      </div>
  );
};
