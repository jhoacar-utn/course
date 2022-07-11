import { useState } from "react";
import Layout from "../components/Layout";

function NotFound() {
  return (
    

    <Layout>
      <div className="my-5 card text-white bg-warning p-1 align-self-center shadow-lg">
        <div className="card-header">
          <h3 className="card-title text-center">
            <strong>Error 404</strong>
          </h3>
        </div>
        <div className=" text-center card-body bg-dark align-self-center">
          <h4 className="card-text">
            ha ingresado en una ruta <br /> que no existe
          </h4>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
