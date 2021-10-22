import { getImagen } from "../../base/11-async-await"

describe('Verificaciones con pruebas async await y fetch', () => {


    test('debe de retirnar el url de la imagen ', async() => {

        const url = await getImagen()
        expect(url.includes('https://')).toBe(true)
        
    })
    
})
