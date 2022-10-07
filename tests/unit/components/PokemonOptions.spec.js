import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons,
      },
    });
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar las 4 opciones correctamente', () => {
    
    const liTags = wrapper.findAll('li')
    expect(liTags.length).toBe(4)
    
    //se tiene que coincidir con los nombres de los pokemon 
    expect(liTags[0].text()).toBe('bulbasaur')
    expect(liTags[1].text()).toBe('ivysaur')
    expect(liTags[2].text()).toBe('venusaur')    
    expect(liTags[3].text()).toBe('charmander')    
  });

  test('debe de emitir "selection" con sus respecaticos parámetros al hacer click', () => {
    
    const [li1, li2, li3, li4] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')
    // console.log(wrapper.emitted('selection'))
    //emitted espra que se haya emitido por lo menos una vez.
    expect(wrapper.emitted('selection').length).toBe(4)
    // toEqual hace una igualación no estricta
    expect(wrapper.emitted('selection')[0]).toEqual([1])
    expect(wrapper.emitted('selection')[1]).toEqual([2])
    expect(wrapper.emitted('selection')[2]).toEqual([3])
    expect(wrapper.emitted('selection')[3]).toEqual([4])

  });

});