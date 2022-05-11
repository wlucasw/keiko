import React, { useEffect, useRef } from "react"
import { Pokemon } from "../../components/Pokemon"
import { Props as PokemonProps } from "../../components/Pokemon"
import styles from "./Home.module.css"
import { Loader } from "../../components/Loader"

function filterPokemonsByName(pokemons: PokemonProps[], name: string) {
  return pokemons.filter(pokemon => pokemon.name.toUpperCase().includes(name.toUpperCase()))
}

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  const pokemonData = response.json()
  return pokemonData
}

export const Home = () => {
  const [pokemonList, updatePokemonList] = React.useState<PokemonProps[]>([])
  const isLoading = useRef(true)

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await fetchPokemons()
      isLoading.current = false
      updatePokemonList(pokemonData)
    }
    fetchData()
  }, [])

  return (
    <div>
      {isLoading.current ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  )
}
