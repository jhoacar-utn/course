import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toaster position='bottom-right' />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
