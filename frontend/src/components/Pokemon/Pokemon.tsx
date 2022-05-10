export interface Props {
  name: string
  id: number
  height: number
  weight: number
}

export const Pokemon = ({ name, id, height, weight }: Props) => {
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Name : {name}</p>
      <p>Numéro : {id}</p>
      <p>Taille : {height}</p>
      <p>Poids : {weight}</p>
    </div>
  )
}
