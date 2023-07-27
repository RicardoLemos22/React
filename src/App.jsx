import './App.css'

function App() {
  const arreglo = [1,2,3,"coder","react"]

  
  return <div>
    {
       arreglo.map(elemento => {
        console.log(elemento)
        return <p key={elemento}>{elemento}</p>
        /* hay que usar llaves para q muestre el valor de la variable*/
       } )
    }
    {
       arreglo2.map(elemento => {
        console.log(elemento)
        return <p key={elemento}>{elemento}</p>
        /* hay que usar llaves para q muestre el valor de la variable*/
       } )
    }
  </div>
      
}

export default App
