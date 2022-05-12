import { Link } from "react-router-dom"
import styles from "./Pokemon.module.css"

export interface Props {
  name: string
  id: number
  height: number
  weight: number
}

export const Pokemon = ({ name, id, height, weight }: Props) => {
  return (
    <div className={styles.pokemonCard}>
      <Link to={`/pokemon/${id}`}>
        {" "}
        <p>{name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        <p>Id : {id}</p>
        <p>Taille : {height} cm</p>
        <p>Poids : {weight} kg</p>
      </Link>
    </div>
  )
}
