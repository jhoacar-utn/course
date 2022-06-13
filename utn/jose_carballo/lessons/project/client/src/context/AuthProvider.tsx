import { useState, useEffect } from "react";
import { getPokemonInfo, getPokemons } from "../apis";
import { authLogin } from "../services";
import { AuthContext } from "./AuthContext";
import { toast } from "react-hot-toast";


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
  const [state, setState] = useState(initialState);
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promise = data.results.map(async (pokemon: any) => {
        return await getPokemonInfo(pokemon.url);
      });
      const results = await Promise.all(promise);
      setState({
        ...state,
        pokemons: results,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const loginSubmit = (values: any) => {
    authLogin(values)
      .then((response) => {
        setState({
            ...state,
            user: response.data.user,
            token: response.data.body.token,
            isLogin: true
        })
        toast.success("Logeado Satisfactoriamente");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Hubo un error en las credenciales");
      });
  };
  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        setState,
        loginSubmit
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
