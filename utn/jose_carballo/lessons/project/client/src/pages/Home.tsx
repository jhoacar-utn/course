import { NavLink } from "react-router-dom";
import "./styles.scss";

export const Home = () => {
  return (
   <>
    <h1 className="title_main">
    Yo Te Elijo!!
  </h1>
  <div className="img_center">
  <img src="poke222.png" alt="img center" />
</div>
<div className="img_pokebola">
        <h2>Inicia sesión</h2>
        <button className="btn_access">
          <NavLink to="login">
          <img src="pokebola.png" className="item_pokebola" alt="image_2" />
          </NavLink>
        </button>
    </div>
   </>
  )
}
