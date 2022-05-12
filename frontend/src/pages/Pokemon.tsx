import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../components/Loader"
import { Props as PokemonProps } from "../components/Pokemon"
import styles from "./Pokemon.module.css"
import stylesLoader from "../components/Loader/Loader.module.css"

const URL_POKEMON_IMAGE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

async function fetchPokemon(id: string | undefined) {
  const response = await fetch(`http://localhost:8000/pokemon/${id}`, { headers: { accept: "application/json" } })
  const pokemonData = response.json()
  return pokemonData
}

export const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, updatePokemon] = React.useState<PokemonProps | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [requestSFailed, setRequestFailed] = React.useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const pokemonData = await fetchPokemon(id)
      setIsLoading(false)
      updatePokemon(pokemonData)
    }

    fetchData().catch(() => {
      setIsLoading(false)
      setRequestFailed(true)
    })
  }, [id])

  if (isLoading) {
    return (
      <div className={stylesLoader.loader}>
        <Loader />
      </div>
    )
  }

  if (requestSFailed) {
    return (
      <div className={stylesLoader.error}>
        <p>Echec du chargement des données</p>
      </div>
    )
  }

  if (pokemon === null) {
    return (
      <div className={stylesLoader.error}>
        <p>Pokemon non valide</p>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.title}>
        <p>{pokemon.name}</p>
      </div>

      <div className={styles.image}>
        <img src={`${URL_POKEMON_IMAGE}${pokemon.id}.png`} />
        <img src={`${URL_POKEMON_IMAGE}back/${pokemon.id}.png`} />
      </div>
      <div className={styles.image}>
        <img src={`${URL_POKEMON_IMAGE}shiny/${pokemon.id}.png`} />
        <img src={`${URL_POKEMON_IMAGE}back/shiny/${pokemon.id}.png`} />
      </div>
      <div className={styles.description}>
        <p>
          Height : {pokemon.height} cm
          <br></br> Weight : {pokemon.weight} kg
          <br></br> Id : {pokemon.id}
        </p>
      </div>
    </div>
  )
}
