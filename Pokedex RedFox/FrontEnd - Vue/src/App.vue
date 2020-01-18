<template>
  <div id="app">
    <Menu id="menu"/>
    <div id="conteudo">
      <div class="tile is-ancestor">
        <div class="tile is-parent" id="lista">
          <article class="tile is-child" >

                        <div id="listagem">
                          <div class="field">
                              <p class="control has-icons-left has-icons-right">
                                  <input class="input" type="text" placeholder="Charizard" v-on:keyup.passive="procurarPokemon" v-model="search">
                                  <span class="icon is-small is-left">
                                      <i class="fas fa-search"></i>
                                  </span>
                              </p>
                          </div>

                              <div class="list is-hoverable">
                                  
                                  <span v-for="poke in pokemons" v-bind:key="poke.codPokemon">
                                      <a class="list-item" v-on:click.prevent="abrirPokemon(poke.codPokemon)">
                                          <span class="icon has-text-info">
                                              <img id="iconPoke" :src="poke.fotoPokemon"/>
                                          </span>
                                          <span id="nomePoke">
                                              {{poke.nomePokemon}}
                                          </span>
                                      </a>
                                  </span>
                                  
                          </div>
                      </div>

          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">

                  <div id="dadosPokemons">
                      <div class="tile is-ancestor">
                          <div class="tile is-vertical is-parent">
                              <div class="tile is-child box one">
                                  <img id="fotoPoke" v-bind:src="pokemonAtual.fotoPokemon"/>
                                  <p class="title">{{pokemonAtual.nomePokemon}}</p>
                              </div>
                              <br/>
                              <div class="tile is-vertical box">
                                  <p class="title">Dados</p>
                                  <p>Nome: {{pokemonAtual.nomePokemon}}</p>
                                  <p>Tipo: {{pokemonAtual.tipoPokemon}}</p>
                                  <p>Forca: {{pokemonAtual.forcaPokemon}}</p>
                                  <p>Velocidade: {{pokemonAtual.velPokemon}}</p>
                                  <p>Habilidade: {{pokemonAtual.habilidadePokemon}}</p>

                                  <p>Data de Cadastro: {{pokemonAtual.dataFormatada}}</p>
                                  <div class="has-icons-right">

                                      <!-- Apagar -->
                                      <span class="icon is-right has-text-danger" style="float: right;" v-on:click.prevent="abrirModal('Apagar')">
                                          <i class="fas fa-trash"></i>
                                      </span>

                                      <div class="modal" id="modalApagar">
                                        <div class="modal-background"></div>
                                        <div class="modal-card">
                                          <header class="modal-card-head">
                                            <p class="modal-card-title">Deseja apagar {{pokemonAtual.nomePokemon}}?</p>
                                            <button class="delete" aria-label="close" v-on:click.prevent="fecharModal('Apagar')"></button>
                                          </header>
                                          <footer class="modal-card-foot">
                                            <button class="button is-danger" v-on:click.prevent="apagarPokemon">Apagar</button>
                                            <button class="button" v-on:click.prevent="fecharModal('Apagar')">Cancelar</button>
                                          </footer>
                                        </div>
                                      </div>


                                      <!-- Editar -->
                                      <span class="icon is-right has-text-success" style="float: right;" v-on:click.prevent="abrirModal('Editar')">
                                          <i class="fas fa-pen"></i>
                                      </span>

                                      <div class="modal" id="modalEditar">
                                        <div class="modal-background"></div>
                                        <div class="modal-card">
                                          <header class="modal-card-head">
                                            <p class="modal-card-title">Editar</p>
                                            <button class="delete" aria-label="close" v-on:click.prevent="fecharModal('Editar')"></button>
                                          </header>
                                          <section class="modal-card-body">
                                            
                                            <div id="crudModal">
                                              <div class="field">
                                                  <label class="label">Nome</label>
                                                  <div class="control">
                                                      <input class="input" type="text" placeholder="Caterpie" v-model="pokemonAtual.nomePokemon">
                                                  </div>
                                              </div>

                                              <div class="columns">
                                                  <div class="column is-half">
                                                      <label class="label">Força</label>
                                                      <div class="control">
                                                          <input class="input" type="text" placeholder="80" v-model="pokemonAtual.forcaPokemon">
                                                      </div>
                                                  </div>

                                                  <div class="column">
                                                      <label class="label">Velocidade</label>
                                                      <div class="control">
                                                          <input class="input" type="text" placeholder="65" v-model="pokemonAtual.velPokemon">
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                              <div class="field ">
                                                  <label class="label">Tipo</label>
                                                  <div class="control">
                                                      <input class="input" type="text" placeholder="Fogo" v-model="pokemonAtual.tipoPokemon">
                                                  </div>
                                              </div>

                                              <div class="field">
                                                  <label class="label">Habilidade Principal</label>
                                                  <div class="control">
                                                      <input class="input" type="text" placeholder="Confusion" v-model="pokemonAtual.habilidadePokemon">
                                                  </div>
                                              </div>
                                            
                                          </div>
                                           <div class="modal" id="modalConfirmarEdit">
                                                <div class="modal-background"></div>
                                                <div class="modal-content" style="text-align: center;">

                                                    <footer class="modal-card-foot">
                                                        <button class="button is-success" v-on:click.prevent="editarPokemon">Confirmar</button>
                                                        <button class="button" v-on:click.prevent="fecharDoisModais('ConfirmarEdit','Editar')">Cancelar</button>
                                                    </footer>

                                                </div>
                                            </div>
                                          </section>
                                          <footer class="modal-card-foot">
                                            <button class="button is-success" v-on:click.prevent="abrirModal('ConfirmarEdit')">Salvar</button>
                                            <button class="button" v-on:click.prevent="fecharModal('Editar')">Cancel</button>
                                          </footer>
                                        </div>
                                      </div>
                                      
                                    
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">

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

          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

import Pokemon from "./services/pokemons";

export default {
  name: 'app',
  components: {
      Menu
  },
    data: function(){
        return {
            search: '',
            pokemon: {
                nomePokemon: '',
                forcaPokemon: '',
                velPokemon: '',
                tipoPokemon: '',
                habilidadePokemon: ''
            }, 
            pokemons: Array,
            pokemonAtual: {
                codPokemon: '',
                nomePokemon: '',
                forcaPokemon: '',
                velPokemon: '',
                tipoPokemon: '',
                habilidadePokemon: '',
                fotoPokemon: '',
                dataCadastro: ''
          }
        }
    },
    methods: {
        cadPokemon: async function(){
            await Pokemon.salvar(this.pokemon);
            this.listar()
        },
        listar: function(){
            Pokemon.listar().then(res => {
                this.pokemons = res.data;

                this.pokemonAtual = this.pokemons[0];

                console.log(res.data);
                this.pokemon.nomePokemon = '';
                this.pokemon.forcaPokemon = '';
                this.pokemon.velPokemon = '';
                this.pokemon.tipoPokemon = '';
                this.pokemon.habilidadePokemon = '';
            })
        },
        abrirPokemon: function(codPokemon){
          let param = {'codPokemon': codPokemon}
          Pokemon.abrir(param).then(res => {
            console.log(res.data[0]);
            this.pokemonAtual = res.data[0];
          });
        },
        editarPokemon: async function(){
            await Pokemon.editar(this.pokemonAtual).then(console.log('editou'));
            this.fecharModal("ConfirmarEdit");
            this.fecharModal("Editar");
            this.listar();
        },
        apagarPokemon: async function(){
            let param = {'codPokemon': this.pokemonAtual.codPokemon}
            console.log(param);
            await Pokemon.apagar(param);
            this.fecharModal("Apagar");
            this.pokemonAtual.nomePokemon = '';
            this.pokemonAtual.forcaPokemon = '';
            this.pokemonAtual.velPokemon = '';
            this.pokemonAtual.tipoPokemon = '';
            this.pokemonAtual.habilidadePokemon = '';
            this.pokemonAtual.codPokemon = '';
            this.pokemonAtual.fotoPokemon = '';
            this.pokemonAtual.dataCadastro = '';
            this.listar();
        },
        procurarPokemon: function(){
            if(this.search == ''){
                this.listar();
            }else{
                let param = {"nomePokemon":this.search};
                Pokemon.buscar(param).then(res => {
                    console.log(res.data);
                    this.pokemons = res.data;
                })
            }
        },



        abrirModal: function(nome){
          document.getElementById("modal" + nome).classList.add('is-active')
        },
        fecharModal: function(nome){
          document.getElementById("modal" + nome).classList.remove('is-active')
        },
        fecharDoisModais: function(nome1, nome2){
            document.getElementById("modal" + nome1).classList.remove('is-active')
            document.getElementById("modal" + nome2).classList.remove('is-active')
        }

        
    },
    mounted(){
        
        this.listar();

    }
}
</script>


<style lang='scss'>
  @import "~bulma/css/bulma.css";
  #app{
    #lista {
      height: 99vh;
      overflow-y: scroll;
    }
    @import "~bulma/css/bulma.css";
    .list-item{
        color: black;
        margin-bottom: 1vh;
        #nomePoke{
            float: right;
            margin-right: 2vw;
        }
        #iconPoke{
          padding: 2%;
          transform: scale(2);
        }
    }
    #fotoPoke{
      width: 180px;
    }
    #search{
        margin: 0.5%;
        margin-bottom: 5%;
    }
  }

</style>
