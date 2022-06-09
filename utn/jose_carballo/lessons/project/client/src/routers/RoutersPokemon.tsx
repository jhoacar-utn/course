import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
import { HomePokemons } from "../layouts/HomePokemons"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Profiler } from "../pages/Profiler"
import {Register} from "../pages/Register"

export const RoutersPokemon = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePokemons />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profiler" element={<Profiler />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
