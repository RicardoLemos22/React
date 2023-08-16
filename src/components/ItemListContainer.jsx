import {ItemList} from "../components/ItemList.jsx"

const Texto = ({ greeting }) => <h2>{greeting}</h2>

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        {
          <Texto greeting={greeting}></Texto>
          
        }
        <div class="row">
          <ItemList></ItemList>
          <ItemList></ItemList>
          <ItemList></ItemList>
        </div>
      </>
      )
}

