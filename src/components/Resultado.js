import React from 'react'
import styled from '@emotion/styled';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types'


const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border : 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`

const TextoCotizador = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`
const Resultado = ({cotizacion}) => {   
   return ( // cuando quiere mostrar algo si es incorrrecto 
    (cotizacion === 0 ) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
    : (// los entreparentesis es para dar por implicito el return
        <ResultadoCotizacion>
            <TransitionGroup
                component="span" // el elemento debe existir
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    // ahora el tiempo que va a tardar en realizarse
                    timeout={{enter: 500 , exit: 500}}
                >
                    <TextoCotizador>El total es : $ <span>{cotizacion}</span> </TextoCotizador>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    )
   )
}
 
Resultado.propTypes={
    cotizacion: PropTypes.number.isRequired
}
export default Resultado;