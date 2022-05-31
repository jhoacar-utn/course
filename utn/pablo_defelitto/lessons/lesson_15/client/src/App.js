import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncion from "./components/ComponenteFuncion";
import ComponentePokemons from "./components/Pokemons";

function App() {
  return (
    <div>
      Mi App
      <ComponenteClase></ComponenteClase>
      <ComponenteFuncion name="Juan"></ComponenteFuncion>
      <ComponentePokemons></ComponentePokemons>
    </div>
  );
}

export default App;
