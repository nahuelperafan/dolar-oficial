import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useMostrarValor from '../hooks/useMostrarValor'

const Contenedor = styled.div`
  color: #FFF;
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  box-shadow: rgba(212, 216, 215, 0.16) 0px 1px 4px, rgb(222, 217, 217) 0px 0px 0px 3px;
  @media (min-width: 992px) {
    display: grid;
  }
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  `
  const Header = styled.h2`
  font-family: 'Lato', sans-serif;
  color: #f80a0a;
  text-align: center;
  font-weight: 700;
  margin-left: 1rem;
  `
 
const Formulario = () => {

     const Dolar = [
         {id: 'OFC', nombre: 'Dolar Oficial'
        //  fecha: "2022/06/29 20:31:35",
        //  compra: "124.13",
        //  venta: "130.13"
     }
     ]

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://api-dolar-argentina.herokuapp.com/api/dolaroficial"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
        }

        consultarAPI();
    }, [])

  return (

    <Contenedor>
    <Heading>COMPRA $236</Heading>
    <Heading>VENTA $239</Heading>
    <Header>Actualizado el 29/06/22 06:56 PM</Header>
   </Contenedor>
  )
}

export default Formulario