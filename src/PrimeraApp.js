// dos componentes, por funciones o clases,m por practicas se debe hacer por funciones
import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types'

//Se espera que regrese algo html 

const PrimeraApp = ({saludo, subtitulo}) => {
    //  Solo puedo devolver un tag a la vez o fragmento  a la vez, JSX Fragment <> </>, si pongo () despues del retun solo me deja devolver uno 
    // return ( <h1> oliwi</h1>)

    // const saludo = 'Hola Mundo'

 
    // if(!saludo) throw new Error('el saludo es necesario')
    console.log(saludo)

    //No imprime booleanos

    // Nom imprime objetos asi : (toca hacerles stringify)
    /**
     * const saludo = {
        nombre: 'Alejo',
        edad : 92
    }

    3 es ele espacio 
     */
    return (
        <>
            <h1>{saludo}!!!</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
    )
}

//Propiedades y valores por defecto y obligatorios

PrimeraApp.propTypes = {
    saludo : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}

export default PrimeraApp

/***
 * Dos qequivalencias  al ahora de devolver fragmentos
 * 
 * Manera poco eficientes por creacion de divs sin uso adicional 
 * return ( 
        <div>
            <h1>Hola Mundo</h1>
            <p>Mi Primera App con React Js</p>
        </div>
    )

    Estos dos no crean divs

    return( <>
            <h1>Hola Mundo</h1>
            <p>Mi Primera App con React Js</p>
        </div>
    </> )

    Esta mete una importacion adicional
    return (
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi Primera App con React Js</p>
        </Fragment>
    )
 */