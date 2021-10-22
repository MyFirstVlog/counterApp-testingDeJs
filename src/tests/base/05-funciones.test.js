import {getUser, getUsuarioActivo} from '../../base/05-funciones'


describe('Pruebas en 05-Funciones', () => {
    test('debe de retornar un obj ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

        const user = getUser()

        expect(user).toEqual(userTest) //Para verificar las propiedades mas no las direcciones de memoria
    
    })

    test('debe retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'Alejo'
        }

        console.log({userTest})
        const fnDePrueba = getUsuarioActivo('Alejo')
        console.log({fnDePrueba})

        expect(fnDePrueba).toEqual(userTest)

    })
    
    
})
