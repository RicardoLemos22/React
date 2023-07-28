import { useState } from "react"


function Demo() {

const [contador, setContador] = useState(0)
const [showElement, setShowElement] = useState(false)

const handleIncrementContador = () => {
    setContador(contador+1)
}

    return (
        <>
        <button onClick={handleIncrementContador} >Sumar + 1</button>
        <p>El contador es: {contador}</p>
        
        <button onClick={() => { setShowElement(!showElement)}}
        >Alternar elemento</button>
        { showElement ? <div>Hola coders!</div> : null  }
        <TextoRojo parrafo={"Este texto tiene fondo rojo"} />
        </>
        )
}

// Patrones: Componentes de presentacion
const TextoRojo = ({parrafo}) => {
    return (
        <p style={
            {backgroundColor: 'red'} 
        }>
            {parrafo}</p>

    )
}


export default Demo