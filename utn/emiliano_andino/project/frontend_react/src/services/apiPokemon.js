import  {getPokemonsUsed} from "./apiServer";
const API_URL = process.env.REACT_APP_POKEAPI_URL || "https://pokeapi.co/api/v2"; // /pokemon


export const getPokemons = async function(){

    const response = await fetch(`${API_URL}/pokemon`);
    const json = await response.json();
    const results = json.results;

    const pokemonArray = [];
    const pokemonArrayRegister = await getPokemonsUsed();

    for(let index=0; index < results.length; index++)
    {
        const pokemon = {
            name: "",
            image: ""
        };
        const pokemonData = results[index];
        
        const urlPokemon = pokemonData.url;

        const responsePokemon = await fetch(urlPokemon);
        const jsonPokemon = await responsePokemon.json();
        let Existe = false;
        for(let index=0; index < pokemonArrayRegister.length; index++){
            if(pokemonArrayRegister[index] ===  pokemonData.name) {Existe = true;}
        }
        if(!Existe){
            pokemon.name = pokemonData.name;
            pokemon.image = jsonPokemon.sprites.front_default;
            pokemonArray.push(pokemon);
        }
    }

    return pokemonArray;
}

