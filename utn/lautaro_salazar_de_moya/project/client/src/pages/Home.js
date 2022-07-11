import Layout from "../components/Layout";

function Home() {
  
  return(
    <Layout>
      <div className="my-5 card align-self-center shadow-lg">
        <div className="card-header">
          <h4 className="card-title text-center">Bienvenido</h4>
        </div>
        <div className=" text-center card-body align-self-center">
          <p className="card-text">Registrate para participar de esta app!
            <br/><br/>Entrega final del curso de
            <br/>Programacion web avanzada de la UTN-BA </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
