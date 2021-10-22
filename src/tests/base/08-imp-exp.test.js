import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../datos/heroes"

describe('Pruebas en fns de heroes', () => {
    test('debe retornar un heroe por id', () => {
        const id = 1

        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h => h.id === id)
        
        expect(heroe).toEqual(heroeData)

        
    });

    test('debe retornar undefined si el heroe no esta en los datos', () => {
        const id = 10

        const heroe = getHeroeById(id)
        
        expect(heroe).toBe(undefined) // se puede usar el tobe porque es un primitivo de js

        
    });

    test('debe retornar todos los objs que pertenecen a DC', () => {
        const owner = 'DC'

        const heroe = getHeroesByOwner(owner)

        const heroesTest = heroes.filter(each => each.owner === owner)
        
        expect(heroe).toEqual(heroesTest) 

        
    });

    test('debe retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel'

        const heroe = getHeroesByOwner(owner)

        console.log({heroe})

        expect(heroe.length).toBe(2)
        

        
    });

    
    
})
