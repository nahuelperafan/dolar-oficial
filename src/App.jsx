import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImagenDolar from './img/dolar.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 200px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #FFF;
    display: block;
    margin: 10px auto 0 auto;

  }
`

function App() {

  const [resultado, setResultado] = useState({})


  useEffect(() => {
    const cotizarDolar = async () => {
      const url = `https://api-dolar-argentina.herokuapp.com/api/dolaroficial`
      
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      setResultado([resultado])
    }
    cotizarDolar()
  })

  

  return (

    <Contenedor>
      <Imagen
        src={ImagenDolar}
        alt="Imagen Dolar Oficial"
      />

      <div>
        <Heading>Cotizacion Dólar Oficial</Heading>

        <Formulario />
        <Resultado resultado={resultado}/>
      </div>

    </Contenedor>
  )
}

export default App
