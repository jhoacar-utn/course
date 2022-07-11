import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/register";
import { AuthorizationContext } from "./context/authorization";
import { useEffect, useReducer, useContext } from "react";
import AuthMiddleware from "./middlewares/auth/AuthMiddleware";
import { AppContext } from "./context/store";
import { globalReducer } from "./redux/reducers/globalReducer";
import { getToken, validateToken } from "./services/authorization";
import { changeLoggedIn, loadUserData } from "./redux/actions/globalActions";

function App() {

  const initialState = {
    isLoggedIn:false,
    userData:{}
  }

  useEffect(() => {
    const session = getToken();
    if (session) {
      const valid = async () => {
        try {
          const result = await validateToken(session);
          if (result) {
            setGlobalStore(changeLoggedIn(true))
            setGlobalStore(loadUserData(result))
          }

        } catch (error) {
          console.log(error);
        }
      };
      valid();
    }
    return;
  }, [AppContext]);

const [globalStore, setGlobalStore] = useReducer(globalReducer, initialState);

  const { isLoggedIn, userData } = globalStore;

  const store = {
    isLoggedIn,
    userData,
    dispatch: setGlobalStore,
  };

  return (
    <AppContext.Provider value={store}>
      <AuthorizationContext.Provider value={{ isLoggedIn }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isLoggedIn? <Dashboard />:<Home />} />
            <Route
              path="/dashboard"
              element={<AuthMiddleware element={<Dashboard />} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthorizationContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
