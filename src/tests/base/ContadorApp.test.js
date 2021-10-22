import React from 'react';
import { shallow } from 'enzyme';
import ContadorApp from '../../CounterApp';


describe('Pruebas tecnicas de la app del super contador web', () => {

    let wrapper = shallow(<ContadorApp />)

    //Ciclo de vida, se inicializa a esta condicion en cada uno de los tests

    beforeEach(()=> {
        wrapper = shallow(<ContadorApp />)
    })
    
    test('verificacion del snapshot renderizado ', () => {


        expect(wrapper).toMatchSnapshot()
        
    })

    test('verificacion del valr esperado  ', () => {
        
        const wrapper = shallow(<ContadorApp value={7}/>)
        const defaultNumber = wrapper.find('h2').text()

        expect(defaultNumber).toBe('7')


    })

    test('incrementar con el boton de +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text()

        expect(counterText).toBe('8')

        

    })

    test('decrementar con el boton de -1', () => {
       
        
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text()

        expect(counterText).toBe('6')

    })
    
    test('debe colocar el valor por defecto', () => {
       
        
        const wrapper = shallow(<ContadorApp value={105}/>)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text()

        expect(counterText).toBe('105')

        console.log(counterText)

    
    })

    
    
})

