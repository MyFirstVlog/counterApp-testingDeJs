import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../datos/heroes"



describe('Pruebas con promesas ', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0])
                done() // se pone para avisar que aqui acaba la prueba
            })

    })
    test('debe de obtner un error si el heroe por id no existe', (done) => {
        
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el heroe')
                done() // es mandatorio en tareas asincronas, pilas !!!!
            })

    })
    
    
})
