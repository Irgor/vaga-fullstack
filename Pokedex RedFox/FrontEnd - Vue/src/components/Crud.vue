<template>
    <div id="crud">
        <div class="field">
            <label class="label">Nome</label>
            <div class="control">
                <input class="input" type="text" placeholder="Caterpie" v-model="pokemon.nomePokemon">
            </div>
        </div>

        <div class="columns">
            <div class="column is-half">
                <label class="label">Força</label>
                <div class="control">
                    <input class="input" type="text" placeholder="80" v-model="pokemon.forcaPokemon">
                </div>
            </div>

            <div class="column">
                <label class="label">Velocidade</label>
                <div class="control">
                    <input class="input" type="text" placeholder="65" v-model="pokemon.velPokemon">
                </div>
            </div>
        </div>
        
        <div class="field ">
            <label class="label">Tipo</label>
            <div class="control">
                <input class="input" type="text" placeholder="Fogo" v-model="pokemon.tipoPokemon">
            </div>
        </div>

        <div class="field">
            <label class="label">Habilidade Principal</label>
            <div class="control">
                <input class="input" type="text" placeholder="Confusion" v-model="pokemon.habilidadePokemon">
            </div>
        </div>


        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" v-on:click.prevent="cadPokemon">Adicionar</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Limpar</button>
            </div>
        </div>
    </div>
</template>


<script>
import Pokemon from '../services/pokemons.js';
import Listagem from './Listagem.vue';

export default {
    name: "Crud",
    data: function(){
        return {
            pokemon: {
                nomePokemon: '',
                forcaPokemon: '',
                velPokemon: '',
                tipoPokemon: '',
                habilidadePokemon: ''
            }
        }
    },
    methods: {
        cadPokemon: function(){
            Pokemon.salvar(this.pokemon)
            Listagem.listar();
        }
    }
}
</script>


<style lang="scss">

</style>