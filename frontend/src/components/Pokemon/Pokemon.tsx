interface Props {
  name: string
  id: number
  key: number
}

export const Pokemon = ({ name, id }: Props) => {
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Name : {name}</p>
      <p>Numéro : {id}</p>
    </div>
  )
}
