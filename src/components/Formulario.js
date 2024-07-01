import React, {useState} from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper';


// styled Components - nota no le des estilos si no lo requiere
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center; // para que centre verticalmente
`;
const Label = styled.label`
    flex: 0 0 100px; // que no se agrande ni se menore pero con una base de 100
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; // que pierda su aparencia por defecto
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding : 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer
    }
`
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;
const Formulario = ({guardarResumen , guardarCargando}) => {

    const [datos , guardarDatos] = useState({
        marca : '',
        year: '',
        plan: '' 
    })
    const [error , guardarError] = useState(false); // no habra error cuando todos los campos de datos este lleno

    // Extraer los valores del state
    const {marca , year, plan } = datos;
    // lee los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value // esto es para ingresar directamente al objeto los datos
        })
    }
    // cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault()
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true);
             return
        }

        guardarError(false)
        // Una base de 2000
        let resultado = 2000;

        /* Obtener la diferencia de años */
        const diferencia = obtenerDiferenciaYear(year)
        console.log(diferencia)
        /* Por cada año hay que restar el 3%  */
        resultado -= ((diferencia * 3) * resultado) / 100 // va a ir restando 3% a cada año que pase por aqui
        //* si miras el la seleccion los mas nuevos van incrementando el precio en la consola
        //*console.log(resultado)

        /* Americano 15% */ // por ejemplo si tengo 2000 como base va a subir 15% de ese 2000
        /* Asiatico 5% */
        /* Europeo 30% */
        resultado = calcularMarca(marca) * resultado
        console.log(resultado);

        /* Basico aumenta 20% */
        /* Completo50% */
        const incrementoPlan = obtenerPlan(plan)
        // console.log(incrementoPlan)
        // toFixed es para que tenga 2 digitos decimales  los resultados
        resultado = parseFloat(incrementoPlan *  resultado).toFixed(2) 
        // console.log(resultado)
        guardarCargando(true) //* se muestra el Spinner
       
        setTimeout(() => { // despues de 3 segundos vamos a pasar los datos
            guardarCargando(false) // *se oculta el Spinner
            /* Pasa la informacion al componente principal*/
        guardarResumen({
            cotizacion: Number(resultado), // para pasarlo como numero y no como string
            datos  // aqui se pasara los datos , donde tiene marca , año y plan
        })

        }, 3000);

        


    }
    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
        { error ? <Error>Todos los campos son obligatorios</Error> : null  }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={obtenerInformacion} // envia el valor seleccionado, asi en todos
                >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo> 
            <Campo>
                <Label>Marca</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={obtenerInformacion}

                >
                    <option value="">-- Seleccione --</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan" // deve ser los mismos para radio
                    value="basico"//name diferente
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}

                /> Basico 
                 <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"} // no le da ningun valor a plan, aqui solo debe mostrar un true al parecer
                    // aqui  abajo se ingresa el valor
                    onChange={obtenerInformacion}

                /> Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}
 
Formulario.propTypes={
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
export default Formulario;