<template>
	<div class="options-container">
		<ul>
			<!-- $emit se usa para Emitir evento a PokemonPage -->
			<li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
				{{ pokemon.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		pokemons: {
			type: Array,
			require: true
		}
	},
	methods: {
		hola(){
			//this.$emit()
		}
	}
}
</script>

<style scoped>
ul {
	list-style-type: none;
}

li {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 250px;
}

li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
	display: flex;
	justify-content: center;
}
</style>