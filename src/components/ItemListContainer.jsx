import {ItemList} from "../components/ItemList.jsx"

const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        {
          <Texto greeting={greeting}></Texto>
          
        }
        <div class="row">
          <ItemList numero={1}></ItemList>
          <ItemList numero={2}></ItemList>
          <ItemList numero={3}></ItemList>
          <ItemList numero={4}></ItemList>

          <ItemList numero={3}></ItemList>
          <ItemList numero={4}></ItemList>
          <ItemList numero={1}></ItemList>
          <ItemList numero={2}></ItemList>
        </div>
      </>
      )
}

