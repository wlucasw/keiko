interface Props {
  name: string
  id: string
}

function defineUrl(id: string) {
  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
}

export const Pokemon = ({ name, id }: Props) => {
  return (
    <div>
      <img src={defineUrl(id)} />
      <p>Name : {name}</p>
      <p>Numéro : {id}</p>
    </div>
  )
}
