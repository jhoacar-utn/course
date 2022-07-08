import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { HomePokemons } from "../layouts/HomePokemons";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profiler } from "../pages/Profiler";
import { Register } from "../pages/Register";
import RoutingPrivate from "./RoutingPrivate";

export const RoutersPokemon = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePokemons />}>
          <Route index element={<Home />} />
          <Route
            path="dashboard"
            element={
              <RoutingPrivate>
                <Dashboard />
              </RoutingPrivate>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="profiler"
            element={
              <RoutingPrivate>
                <Profiler />
              </RoutingPrivate>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
