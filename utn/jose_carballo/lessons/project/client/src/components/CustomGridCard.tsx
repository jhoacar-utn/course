import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { CustomCard } from "./CustomCard";

export const CustomGridCard = () => {
    const {pokemons} = useContext(AuthContext);
  return (
    <div className="cards">
        { pokemons?.map( (pokemon: any, index: number) => {
            return (
                <CustomCard key={index} pokemon={pokemon.data} />
            )
        })}
    </div>
  )
}
