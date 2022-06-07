import { useState,  createContext, useEffect} from 'react';
import { getPokemonInfo, getPokemons } from '../apis';

export interface INITIAL_STATE{
    token:'';
    user:{};
    // pokemons: ResponsePokemons;
    pokemons: any;
}

const initialState: INITIAL_STATE ={
    token:'',
    user:{},
    pokemons:[]
}

export const AuthContext = createContext<INITIAL_STATE>({} as INITIAL_STATE);

interface Props {
    children: JSX.Element | JSX.Element[]
}


const AuthProvider = ({children}:Props) => {
    const [state, setState] = useState(initialState);
    const fetchPokemons = async() => {
        try {
            const data = await getPokemons()
          const promise = data.results.map(async(pokemon: any) => {
              return await getPokemonInfo(pokemon.url)
          })
          const results = await Promise.all(promise)
           setState({
               ...state,
               pokemons: results
           })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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