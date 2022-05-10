interface Props {
  name: string
  id: string
}

export const Pokemon = ({ name, id }: Props) => {
  console.log(name)
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      <p>Name : {name}</p>
      <p>Numéro : {id}</p>
    </div>
  )
}
