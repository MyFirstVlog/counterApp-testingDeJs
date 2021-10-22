//Punto inicial de la aplicacion
import React from "react"
import  ReactDOM  from "react-dom"
import PrimeraApp from "./PrimeraApp"
import './index.css'
import ContadorApp from "./CounterApp"


const divRoot = document.querySelector('#app')

ReactDOM.render(<ContadorApp value={7} />,divRoot) //Componente Padre

