import React  from 'react'
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types'

const ContendorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {
    // extraer de datos 
    const {marca, year, plan} = datos
    if(marca === '' || year === '' || plan === '' ){ // si esta vacio ingresas al if
        return null; // eso hara que no pase al return de abajo es para no tener bastantes ternarios
    }
    return ( 
        <ContendorResumen>
             <h2>Resumen de Cotizacion</h2>
        <ul>
            <li>Marca : {primerMayuscula(marca)} </li>
            <li>Plan :   {primerMayuscula(plan)}</li>
            <li>Año del auto :  {year}</li>
        </ul>
        </ContendorResumen>
       
     );
}
 
Resumen.propTypes={
    datos: PropTypes.object.isRequired
}
export default Resumen;