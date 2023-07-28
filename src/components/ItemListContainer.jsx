
const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        {
        <main class="container bienvenidos-container">
        <Texto greeting={greeting}></Texto>
        </main>
        }
      </>
      )
}
