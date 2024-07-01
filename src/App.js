import React, {useState} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {
  const[resumen , guardarResumen] = useState({
    cotizacion : 0, //Asi iniciaria los valores (todo esto para que aparesca el cuadro resultado abajo )
    datos: {
      marca : '',
      year : '',
      plan : ''
    }
  })
const[cargando,guardarCargando ] = useState(false)  
  
  // Extraer datos
  const {cotizacion, datos} = resumen // esto extrae del state resumen el objeto datos que tiene dentro todo sus elementos

  return (
    <Contenedor>
    <Header
    titulo='Cotizador de Seguros'
    />
    <ContenedorFormulario>
       <Formulario 
        guardarResumen = {guardarResumen}
        // de esta menera pasara a true para mostrarse el spinner
        guardarCargando = {guardarCargando}
       />
       {cargando ? <Spinner/> : null}
      
       {/* {datos ? (
         <Resultado/>
       ) : null } */}
    <Resumen
      datos = {datos}
    />

    {!cargando  // que revise cuando no este cargando muestra el spinner
    ?
      <Resultado
      cotizacion = {cotizacion}
      />
    : null
    } 
    
    </ContenedorFormulario>
    </Contenedor>
    
  );
}

export default App;
