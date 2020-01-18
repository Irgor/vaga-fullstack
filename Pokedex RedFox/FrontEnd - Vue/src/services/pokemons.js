import { http } from './config';

export default {
    listar:() => {
        return http.get('pokemon');
    },

    salvar:(pokemon) => {
        return http.post('cadPokemon', pokemon);
    },
    abrir:(cod) => {
        return http.post('getPokemon', cod);
    },
    editar:(pokemon) => {
        return http.put('editPokemon', pokemon);
    },
    apagar:(pokemonEdit) => {
        return http.post('delPokemon', pokemonEdit);
    },
    buscar:(nome) => {
        return http.post('buscaPokemon', nome);
    }
}