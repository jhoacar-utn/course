import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import AuthContext from "./context/AuthContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={[token, setToken]}>
      <div className="flex flex-col min-h-screen text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
