import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from "../mocks/pokemons.mock";


describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(async () => {
        wrapper = shallowMount(PokemonPage)
    });

    test('debe de hacer match con el snapshot', () => {
        //Esta prueba no es importante debido a que solo carga 'espere por favor...'
        //No carga otros contenidos debido a la condición por defecto como 'false'
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('debe de llamar mixPokemonArray al montar', () => {
        
        const mixPokemonArray = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        // Se vuelce a montar el wrapper para que vuelva a hacer la carga de la página
        // y vuelva a disparar los metodos
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArray).toHaveBeenCalled()
    });

    test('debe de hacer match con el snapshot cuando cargan los pokemon', () => {
        
        const wrapper = shallowMount(PokemonPage, {
            // Mando la data personalizada para que otros componentes que lo necesiten puedad funcionar correctamente
            data() {
                return {
                    //importo el array de los mocks ya creados
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar  los componentes de PokemonPicture y PokemonOptions', () => {
        
        // Se usa el shallowMount para que no monte los componente y los muestra con la palabra 'stub'
        const wrapper = shallowMount(PokemonPage, {
            // Mando la data personalizada para que otros componentes que lo necesiten puedad funcionar correctamente
            data() {
                return {
                    //importo el array de los mocks ya creados
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        const PokemonPicture = wrapper.find('pokemon-picture-stub')
        const PokemonOptions = wrapper.find('pokemon-options-stub')
        // Comprueba la existencia de componentes
        expect(PokemonPicture.exists()).toBeTruthy()
        expect(PokemonOptions.exists()).toBeTruthy()
        // Compruba la existencia de los atributos de los componentes
        expect(PokemonPicture.attributes('pokemonid')).toBe('1')
        expect(PokemonOptions.attributes('pokemons')).toBeTruthy()
    })

    test('pruebas con checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPage, {
            // Mando la data personalizada para que otros componentes que lo necesiten puedad funcionar correctamente
            data() {
                return {
                    //importo el array de los mocks ya creados
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[3],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(4)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Corecto, tu pokemon es ${mockPokemons[3].name}`)

        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Nop, la respuesta correcta es ${mockPokemons[3].name}`)
        

    });
})