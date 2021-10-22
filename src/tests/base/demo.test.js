import {getSaludo} from '../../base/02-template-string'

describe('Pruebas en el archivo demo.test.js', () => { //Sirve para agrupar las pruebas 
    
    test('getSaludo debe de retornar hola alejandro', () => {
    
            const nombre = "Alejandro"

            const saludo = getSaludo(nombre)

            expect(saludo).toBe('Hola ' + nombre + '!')

            console.log('test del template')
        
    })

    test('get Saludo debe retornar hola carlos! si no hay argumneto nombre ', () => {
        const saludo = getSaludo()
        
        expect(saludo).toBe('Hola Carlos!')
    })
    

    //get Saludo debe retornar hola carlos! si no hay argumneto nombre

})




// test('debe ser true', () => {

//     const isActive = true 

//     if(isActive){
//         throw new Error('No esta Activo')
//     }
// })