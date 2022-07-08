import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { CustomCard } from "./CustomCard";

export const CustomGridCard = () => {
    const {pokemons} = useContext(AuthContext);
  return (
    <div className="cards">
        { pokemons?.map( (pokemon: any, index: number) => {
            return (
                <CustomCard key={index} pokemon={pokemon} />
            )
        })}
    </div>
  )
}
