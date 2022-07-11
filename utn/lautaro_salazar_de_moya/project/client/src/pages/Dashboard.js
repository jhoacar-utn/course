import { useContext } from "react";
import Layout from "../components/Layout";
import { AppContext } from "../context/store";


const Dashboard = ()=>{

  const { userData } = useContext(AppContext);
  
  return (
    <Layout>
      <div className="my-4 card align-self-center shadow-lg">
        <div className="card-header">
          <strong>Hola de nuevo {userData.name}</strong>
        </div>
        <div className="card-body d-flex justify-content-center">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Datos registrados:</h5>
                <ul className="list-group list-group-flush border border-2 text-center">
                  <li className="list-group-item">
                    Nombre: <strong>{userData.name}</strong>
                  </li>
                  <li className="list-group-item">
                    Email: <strong>{userData.email}</strong>
                  </li>
                  <li className="list-group-item">
                    Avatar: <strong>{userData.avatar}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <img
                className="img-fluid"
                alt={userData.avatar}
                src={userData.image}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
