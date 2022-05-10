import React from "react"
import { Pokemon } from "../../components/Pokemon"
import { pokemonProps } from "../../components/Pokemon"
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
  {
    name: "Ouistempo",
    id: 810,
  },
]

function filterPokemonsByName(pokemons: pokemonProps[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(name.toUpperCase()))
}

export const Home = () => {
  const [pokemonFilterValue, setPokemonFilterValue] = React.useState("")

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonFilterValue(event.target.value)
  }

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <input className={styles.input} onChange={onInputChange} value={pokemonFilterValue} />
      <div>
        {filterPokemonsByName(pokemonList, pokemonFilterValue).map(({ name, id }) => {
          return <Pokemon name={name} id={id} key={id} />
        })}
      </div>
    </div>
  )
}
