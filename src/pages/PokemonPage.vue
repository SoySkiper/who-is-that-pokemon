<template>
  <h1>¿Quién es este pokémon?</h1>

  <PokemonPicture :pokemonId="111" :showPokemon="false"/>
  <PokemonOptions />

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
    components: { 
        PokemonPicture,
        PokemonOptions
        }
}
</script>

<style>

</style>