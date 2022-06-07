interface Pokemon {
    name: string;
    image: string;
}

const getPokemons = async ():Promise<Pokemon[]> =>{
    const API = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(`${API}`);
    const data = await response.json();
        return data.results
}