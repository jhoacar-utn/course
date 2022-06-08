import { Outlet } from "react-router-dom"
// import { CustomGridCard } from "../components/CustomGridCard"
import Navbar from "../components/Navbar"
import  './styles.scss'

export const HomePokemons = () => {
  return (
    <div className="dasboard">
        <Navbar />
        <h1 className="title_main">Bienvenidos a la Apalicación de Personajes</h1>
        <main>
            <div>
            <Outlet />
            </div>
        </main>
    </div>
  )
}
