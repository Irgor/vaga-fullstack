<template>
    <div id="dadosPokemons">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
                <div class="tile is-child box one">
                    <img id="fotoPoke" src="../assets/bulb.png"/>
                    <p class="title">Bulbassauro</p>
                </div>
                <br/>
                <div class="tile is-vertical box">
                    <p class="title">Dados</p>
                    <p>Nome: Bulbassauro</p>
                    <p>Tipo: Grama</p>
                    <p>Peso: 64</p>
                    <p>Altura: 2</p>
                    <p>Habilidade: Razor leaf</p>

                    <p>Data de Cadastro: 11/01/2020</p>
                    <div class="has-icons-right">
                        <span class="icon is-right has-text-danger" style="float: right;">
                            <i class="fas fa-trash"></i>
                        </span>
                        <span class="icon is-right has-text-success" style="float: right;">
                            <i class="fas fa-pen"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DadosPokemon"
}
</script>

<style lang="scss" scoped>
    #dadosPokemons{
        .one{
            text-align: center;
            #fotoPoke{
                height: 200px;
            }
            .title{
                margin: 1%;
            }
        }
    }

</style>