import axios from "axios";
import { toast } from "react-hot-toast";

const URL_BASE =
  process.env.REACT_APP_POKEAPI_URL || "https://pokeapi.co/api/v2/pokemon";

export const getPokemonInfo = async (url: any) => {
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    console.log(error, "Hubo un error en la consulta");
    toast.success("Hubo un error en la consulta");
  }
};
export const getPokemon = async (name: any) => {
  try {
    const pokemon = await axios(`${URL_BASE}/${name}`);
    return pokemon;
  } catch (error) {
    console.log(error, "Hubo un error en la consulta");
    toast.success("Hubo un error en la consulta");
  }
};

export const getPokemons = async (lista: any, offset: any) => {
  try {
    const { data } = await axios(`${URL_BASE}?limit=${lista.length ? 10 : 20}&offset=${offset}`);
    return data;
  } catch (error) {
    console.log(error, "Hubo un error en la consulta");
    toast.success("Hubo un error en la consulta");
  }
};
