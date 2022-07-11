const API_URL = process.env.REACT_APP_POKEAPI_URL || "https://pokeapi.co/api/v2"; // /pokemon


const checkAvailability = (array, value)=>{
  return array.some(function(arrVal) {
    return value === arrVal;
  });
};

export const getPokemons = async function(){
  
// Fetch to my own api server
  const apiServer = await fetch(`http://localhost:4040/api/v1/user/avatar`)
  const res = await apiServer.json()
  const registered = res.body
  
// fetch to the pokeApi server
  const response = await fetch(`${API_URL}/pokemon?limit=26`);
  const json = await response.json();
  const results = json.results;

  const pokemonArray = [];
  const excluded= []

  for (let index = 0; index < results.length; index++) {
    const pokemon = {
      'name': "",
      'image': ""
    };
    const pokemonData = results[index];

    if (!checkAvailability(registered,  pokemonData.name)) {
      
      const urlPokemon = pokemonData.url;

      const responsePokemon = await fetch(urlPokemon);
      const jsonPokemon = await responsePokemon.json();
  
      pokemon.name = pokemonData.name;
      pokemon.image = jsonPokemon.sprites.other.dream_world.front_default;

      pokemonArray.push(pokemon);
    }else{
        excluded.push(pokemonData.name);
    }
  }
  // console.log(excluded);
  return pokemonArray;
}