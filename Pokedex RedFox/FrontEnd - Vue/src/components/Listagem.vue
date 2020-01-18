<template>
    <div id="appTeste">
        
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Charizard">
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>

            <div class="list is-hoverable">
                
                <span v-for="poke in pokemons" v-bind:key="poke.codPokemon">
                    <a class="list-item">
                        <span class="icon has-text-info">
                            <img id="fotoPoke" :src="poke.fotoPokemon"/>
                        </span>
                        <span id="nomePoke">
                            {{poke.nomePokemon}}
                        </span>
                    </a>
                </span>
                
        </div>
    </div>
</template>


<script>

import Pokemon from "../services/pokemons.js";

export default {
    name: "Listagem",
    data: function(){
        return {
            pokemons: Array
        }
    },
    mounted(){
        
        this.listar();

    },
    methods: {

        listar: function(){
            Pokemon.listar().then(res => {
                this.pokemons = res.data;
                console.log(res.data);
            })
        }

    }
}
</script>

<style lang='scss'>
  @import "~bulma/css/bulma.css";
    .list-item{
        color: black;
        margin-bottom: 1vh;
        #nomePoke{
            float: right;
            margin-right: 2vw;
        }
    }

    #search{
        margin: 0.5%;
        margin-bottom: 5%;
    }

</style>
