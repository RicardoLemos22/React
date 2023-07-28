
const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        {
        <Texto greeting={greeting}></Texto>
        }
      </>
      )
}
