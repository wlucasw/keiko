import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"

const pokemonList = [
  {
    name: "Ouisticram",
    id: 390,
  },
  {
    name: "Chimpenfeu",
    id: 391,
  },
  {
    name: "Simiabraz",
    id: 392,
  },
]

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>
        {pokemonList.map(({ name, id }) => {
          return <Pokemon name={name} id={id} key={id} />
        })}
      </div>
    </div>
  )
}
