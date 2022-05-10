export interface pokemonProps {
  name: string
  id: number
}

export const Pokemon = ({ name, id }: pokemonProps) => {
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Name : {name}</p>
      <p>Numéro : {id}</p>
    </div>
  )
}
