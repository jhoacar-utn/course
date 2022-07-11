import type { ComponentProps } from "react";
import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

type NavbarLinkProps = ComponentProps<typeof Link>;

function NavbarLink({ className, ...rest }: NavbarLinkProps) {
  return (
    <Link
      {...rest}
      className={`hover:underline active:text-gray-700 block${
        className ? " " + className : ""
      }`}
    />
  );
}

function Navbar() {
  const [token] = React.useContext(AuthContext);
  const links = token ? (
    <>
      <NavbarLink className="mr-6" to="/dashboard">
        Dashboard
      </NavbarLink>
      <NavbarLink to="/logout">Log Out</NavbarLink>
    </>
  ) : (
    <>
      <NavbarLink className="mr-6" to="/login">
        Log In
      </NavbarLink>
      <NavbarLink to="/register">Register</NavbarLink>
    </>
  );

  return (
    <div className="border-b mb-6">
      <header className="container mx-auto flex items-baseline p-4">
        <h1 className="text-2xl mr-auto">
          <NavbarLink to="/">Pokémon App</NavbarLink>
        </h1>
        <nav className="flex">{links}</nav>
      </header>
    </div>
  );
}

export default Navbar;
