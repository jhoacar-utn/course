import { useEffect, useState } from 'react';
import { getPokemons } from '../services/api';

function ComponentePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        getPokemons().then(result=>{
            console.log(result);
        })

    }, []);

    return (
        <div style={{ marginTop: '100px' }}>
            Pokemones
        </div>
    )
}

export default ComponentePokemons;