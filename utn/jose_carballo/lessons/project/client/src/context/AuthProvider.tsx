import { useState, useEffect } from "react";
import axios from 'axios';
// import { getPokemonInfo, getPokemons } from "../apis";
import { addTokenCredential, authLogin, createAvatar, logoutTokenCredential } from "../services";
import { AuthContext } from "./AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getPokemons } from "../apis";


export interface INITIAL_STATE {
  token: any;
  user: any;
  pokemons: any;
  pokemon: any;
  isLogin: boolean;
}

export const initialState: INITIAL_STATE = {
  token: "",
  user: {},
  pokemon:{},
  pokemons: [],
  isLogin: false
};
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  let offset = 0;
const lista:any = [];

  const fetchPokemons = async () => {
    const pokeData = await getPokemons(lista, offset)
        .then((response) => response.results);
    pokeData.map(async(pokeInfo: any) => {
      const pokemon = await axios.get(pokeInfo.url)
        .then((response) => response.data);
      let imgId = pokemon.id;
      if (pokemon.id < 10) {
        imgId = "00" + pokemon.id;
      }
      if (pokemon.id > 9 && pokemon.id < 100) {
        imgId = "0" + pokemon.id;
      }
      pokemon.imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png`;
      lista.push(pokemon);
      setState({
        ...state,
        pokemons: lista
      })
    });
  };
  const handleScroll = () => {
    window.onscroll = () => {
      const scrollTop = Math.ceil(document.documentElement.scrollTop);
      const innerHeight = window.innerHeight;
      const offsetHeight = document.documentElement.offsetHeight;
      const bottomOfWindow = scrollTop + innerHeight === offsetHeight;
      if (bottomOfWindow) {
        offset += 10;
        fetchPokemons();
      }
    };
  };
 const getPokemonsWithData = () => {
  fetchPokemons();
    window.addEventListener("scroll", handleScroll);
  };
 
  const loginSubmit = (values: any) => {
    authLogin(values)
      .then((response) => {
        const token = response.data.body.token;
        setState({
            ...state,
            user: response.data.user,
            token: token,
            isLogin: true
        })
        addTokenCredential(token)
        toast.success("Logeado Satisfactoriamente");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Hubo un error en las credenciales");
      });
  };
  const handleCreate = (values: any) => {
    createAvatar(values).then((resp) => {
      console.log(resp)
      navigate('login');
      toast.success("Creado Satisfactoriamente");
    })
    .catch(({response}) => {
      toast.error(`${response.data.error}`);
    })
  }
  const handleLogout = () => {
    logoutTokenCredential();
    setState({
      ...state,
      isLogin: false
    })
    navigate('/');
  }
  useEffect(() => {
    getPokemonsWithData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        setState,
        loginSubmit,
        handleLogout,
        handleCreate
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
