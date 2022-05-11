import React, { useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import { Props as PokemonProps } from "../../components/Pokemon"
import styles from "./Home.module.css"

function filterPokemonsByName(pokemons: PokemonProps[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(name.toUpperCase()))
}

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  const pokeData = response.json()
  return pokeData
}

export const Home = () => {
  const [pokemonFilterValue, setPokemonFilterValue] = React.useState("")

  const [pokemonList, updatePokemonList] = React.useState<PokemonProps[]>([])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonFilterValue(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await fetchPokemons()
      updatePokemonList(pokemonData)
    }
    fetchData()
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
