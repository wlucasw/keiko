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
  const [pokemonList, updatePokemonList] = React.useState<PokemonProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await fetchPokemons()
      updatePokemonList(pokemonData)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className={styles.title}>
        <div>Pokedex</div>
      </div>

      <div className={styles.cardBoard}>
        {pokemonList.map(({ name, id, height, weight }) => {
          return <Pokemon name={name} id={id} height={height} weight={weight} key={id} />
        })}
      </div>
    </div>
  )
}
