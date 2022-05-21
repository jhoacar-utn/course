
export interface Pokemon {
    name: string;
    image: string;
}

interface PokemonAPIData{
    name: string,
    url : string
}

const API_URL = "https://pokeapi.co/api/v2"; // /pokemon


export const getPokemons = async function():Promise<Array<Pokemon>>{

    const response = await fetch(`${API_URL}/pokemon`);
    const json = await response.json();
    const results:any[] = json.results;

    const pokemonArray:Pokemon[] = [];

    for(let index=0; index < results.length; index++)
    {
        const pokemon:Pokemon = {
            name: "",
            image: ""
        };
        const pokemonData:PokemonAPIData = results[index];
        
        const urlPokemon = pokemonData.url;

        const responsePokemon = await fetch(urlPokemon);
        const jsonPokemon = await responsePokemon.json();

        pokemon.name = pokemonData.name;
        pokemon.image = jsonPokemon.sprites.front_default;

        pokemonArray.push(pokemon);

    }

    return pokemonArray;
}