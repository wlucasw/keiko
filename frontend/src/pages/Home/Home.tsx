import React, { useEffect } from "react"
import { Pokemon } from "../../components/Pokemon"
import { Props as PokemonProps } from "../../components/Pokemon"
import styles from "./Home.module.css"
import stylesLoader from "../../components/Loader/Loader.module.css"
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
  const [isLoading, setIsLoading] = React.useState(false)
  const [requestFailed, setRequestFailed] = React.useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const pokemonData = await fetchPokemons()
      setIsLoading(false)
      updatePokemonList(pokemonData)
    }

    fetchData().catch(() => {
      setIsLoading(false)
      setRequestFailed(true)
    })
  }, [])

  if (isLoading) {
    return (
      <div className={stylesLoader.loader}>
        <Loader />
      </div>
    )
  }

  if (requestFailed) {
    return (
      <div className={stylesLoader.error}>
        <p>Echec du chargement des données</p>
      </div>
    )
  }
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
