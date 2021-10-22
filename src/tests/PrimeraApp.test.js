import React from 'react';
import { render } from "@testing-library/react"
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp"


describe('Pruebas en componente primera app', () => {
    
    // test('Debe mostar el mensaje hola soy naruto', () => {
        
    //     const saludo = 'Hola Soy Naruto'

    //     const {getByText} = render(<PrimeraApp saludo= {saludo} />) //producto renderizado 

    //     //Usar enzyme

    //     //expect(getByText(saludo)).toBeInTheDocument() //Verificar si esta en el root
    
    // })

    test('debe mostar <PrimeraApp/> correctamente', () => {

        const saludo = 'Hola Soy Naruto'

        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot() //Toma foto de prueba

    })

    test('debe mostar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola Soy Naruto'
        const subtitulo = 'Soy el sub puesto a fza bruta'

        const wrapper = shallow(
                    <PrimeraApp 
                        saludo={saludo}
                        subtitulo={subtitulo}
                    />
                    )
        const textoParrafo = wrapper.find('p').text()
        
        expect(textoParrafo).toBe(subtitulo)

    })
    
    
    
})
