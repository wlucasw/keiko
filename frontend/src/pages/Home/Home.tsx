import React, { useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import { pokemonProps } from "../../components/Pokemon"
import styles from "./Home.module.css"

function filterPokemonsByName(pokemons: pokemonProps[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(name.toUpperCase()))
}

function fetchPokemons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
}

export const Home = () => {
  const [pokemonFilterValue, setPokemonFilterValue] = React.useState("")

  const [pokemonList, updatePokemonList] = React.useState<PokemonProps[]>([])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonFilterValue(event.target.value)
  }

  useEffect(() => {
    fetchPokemons().then(pokemonData => updatePokemonList(pokemonData))
  }, [pokemonFilterValue])

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <input className={styles.input} onChange={onInputChange} value={pokemonFilterValue} />
      <div>
        {filterPokemonsByName(pokemonList, pokemonFilterValue).map(({ name, id, height, weight }) => {
          return <Pokemon name={name} id={id} height={height} weight={weight} key={id} />
        })}
      </div>
    </div>
  )
}
