import { useEffect, useState } from 'react';
import { getPokemons } from '../services/api';

function ComponentePokemons() {
    let [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        pokemons = ["pikachu"];

        getPokemons().then(result=>{
            setPokemons(result);
        })

    }, []);

    return (
        <div style={{ marginTop: '100px' }}>
            Pokemones
        </div>
    )
}

export default ComponentePokemons;