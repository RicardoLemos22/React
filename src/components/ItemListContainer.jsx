
const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        {
        <div class="container bienvenidos-container">
        <Texto greeting={greeting}></Texto>
        </div>
        }
      </>
      )
}
