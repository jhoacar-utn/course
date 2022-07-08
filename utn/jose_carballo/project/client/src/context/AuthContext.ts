import { createContext } from "react";


export interface InitialStateContex{ 
    token:any;
    user:any;
    isLogin: boolean;
    setState: Function;
    pokemons: any;
    pokemon: any;
    loginSubmit: Function;
    handleLogout: Function;
    handleCreate: Function;
}

export const AuthContext = createContext<InitialStateContex>({} as InitialStateContex);