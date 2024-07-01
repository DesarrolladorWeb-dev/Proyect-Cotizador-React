// diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}
// calculaar el total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento

    switch (marca) {
        case 'europeo': // este valor viene de nuestro select
                incremento = 1.30; // no es el 30% de los 2000 sino del que nos llevemos
                break
        case 'americano':
                incremento = 1.15;
                break;
        case 'asiatico':
                incremento = 1.05;
                break
        default:
            break;
    }

    return incremento 
}

// Calcular el tipo de seguro 

export function obtenerPlan(plan){
        return (plan === 'basico') ? 1.20 : 1.50
}

// Muestra la primer letra mayuscula
export function primerMayuscula(texto) {
        // slice para que elimine la primera porque esa la vamos a hacer mayuscula 
        // va a quitar la primera y va a agregar el resto del texto
        // chartAt: toma la primera letra y lo hace mayuscula con to UpperCase
        return texto.charAt(0).toUpperCase() + texto.slice(1)
}