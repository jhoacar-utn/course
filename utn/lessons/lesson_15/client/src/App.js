import Componente from "./components/Componente";
import MiComponente from "./components/MiComponente";

function App() {
  return (
    <div>
      Mi App
      <Componente></Componente>
      <MiComponente name="Juan"></MiComponente>
    </div>
  );
}

export default App;
