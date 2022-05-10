import { Pokemon } from "../../components/Pokemon"
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>
        <Pokemon name="Ouisticram" id="390" />
        <Pokemon name="Chimpenfeu" id="391" />
        <Pokemon name="Simiabraz" id="392" />
      </div>
    </div>
  )
}
