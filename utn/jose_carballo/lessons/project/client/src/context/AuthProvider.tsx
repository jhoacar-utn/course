import { useState,  createContext, useEffect} from 'react';
import { getPokemons } from '../apis';
import { Result } from '../interfaces/pokemons';

export interface INITIAL_STATE{
    token:'';
    user:{};
    pokemons: Result;
}

const initialState: INITIAL_STATE ={
    token:'',
    user:{},
    pokemons:{} as Result
}

export const AuthContext = createContext<INITIAL_STATE>({} as INITIAL_STATE);

interface Props {
    children: JSX.Element | JSX.Element[]
}


const AuthProvider = ({children}:Props) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
      getPokemons().then( result =>{
        setState({
            ...state,
            pokemons : result
        })
      })
        
    },[])
    return(
        <AuthContext.Provider value={{
            ...state
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}