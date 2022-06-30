import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const useMostrarValor = (label) => {

    const [state, setState] = useState('')

    const MostrarValor = () => (
        <>
            <Label>{label}</Label>
            
        </>
    )

    return [ MostrarValor ]
}

export default useMostrarValor