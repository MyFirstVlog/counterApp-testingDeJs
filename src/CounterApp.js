import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ContadorApp = ({value} ) => {

    const initValue =value

    const [valor, setValor] = useState(value)
    

    const incrementarValue = () => {
         setValor(valor + 1)
        //setValor((c) => c + 1 )
    }

    const resetValue = () => {
        setValor(initValue)
    }

    const substractValue = () => {
        setValor((c)=> c -1 )

    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2 id = 'h2Text'> { valor } </h2>
            <button id='btn' onClick = {incrementarValue}>+ 1</button>
            <button onClick= {resetValue}>Reset</button>
            <button onClick = {substractValue}>-1</button>
        </>
    )
}

ContadorApp.propTypes = {
    value : PropTypes.number
}
ContadorApp.defaultProps = {
    value : 7
}

export default ContadorApp