import axios from "axios";

const URL_BASE = process.env.REACT_APP_POKEAPI_URL || 'https://pokeapi.co/api/v2/pokemon';


export const getPokemonInfo = async(url: any) => {
    try {
        const response = await axios(url);
        return response;
      } catch (error) {
        console.log(error, "Hubo un error en la consulta");
      }
}
export const getPokemon = async(name:any) => {
    try {
        const pokemon = await axios(`${URL_BASE}/${name}`);
        return pokemon;
      } catch (error) {
        console.log(error, "Hubo un error en la consulta");
      }
}

export const getPokemons = async () => {
  try {
    const { data } = await axios(URL_BASE);
    return data;
  } catch (error) {
    console.log(error, "Hubo un error en la consulta");
  }
};
