import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuracion', () => {
    test('debe retornar un str y un numero ', () => {
        
        const [letras,numeros]  = retornaArreglo()

        // expect(arr).toEqual(['ABC', 123])
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number')

    })
    
})
