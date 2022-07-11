import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthorizationContext } from "../context/authorization";
import { saveToken } from "../services/authorization";
import { AppContext } from "../context/store";
import { changeLoggedIn, loadUserData } from "../redux/actions/globalActions";

function NavBar() {
  const { isLoggedIn, dispatch } = useContext(AppContext);

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(changeLoggedIn(false));
    dispatch(loadUserData({}));
    saveToken("");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-md">
          <div className="container">
            <img
              className="ms-3 navbar-brand brand-img"
              src="/favicon.ico"
              alt="PokeBall"
            ></img>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {!isLoggedIn?
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>:
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Dashboard
                  </NavLink>
                }
              </div>
            </div>
            <div className="my-2">
              {!isLoggedIn && (
                <>
                  <Link key={1} className="" to="/login">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                  <Link key={2} className="" to="/register">
                    <button
                      className="btn btn-outline-primary btn-sm ms-3"
                      type="button"
                    >
                      Register
                    </button>
                  </Link>
                </>
              )}

              {isLoggedIn && (
                <>
                  <button
                    key={3}
                    className="btn btn-outline-primary btn-sm"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
            <button
              className="navbar-toggler ms-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
