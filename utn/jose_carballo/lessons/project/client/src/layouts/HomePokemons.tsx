import { Outlet } from "react-router-dom";
import "./styles.scss";

export const HomePokemons = () => {
  return (
      <div className="dasboard">
        <Outlet />
      </div>
  );
};
