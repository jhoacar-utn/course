import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/register";
import { AuthorizationContext } from './context/authorization';
import { useState } from 'react';
import AuthMiddleware from './middlewares/auth/AuthMiddleware';
import { ThemeContext } from './context/theme';



function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light' // condicion ? true : false -> operador ternario
    }
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <AuthorizationContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={
                <AuthMiddleware element={<Dashboard />} />
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthorizationContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
