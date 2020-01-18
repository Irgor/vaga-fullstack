const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const bd = require('./connection.js');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/pokemon', function(req, res){
    bd.getPokemons(res);
})


app.post('/buscaPokemon', function(req, res){
    bd.searchPokemon(req, res);
})

app.post('/getPokemon', function(req, res){
    bd.getPokemonCod(req, res);
})

app.post('/cadPokemon', function(req, res){
    bd.cadPokemon(req, res);
})

app.post('/delPokemon', function(req, res){
    bd.delPokemon(req, res);
})

app.put('/editPokemon', function(req, res){
    bd.editPokemon(req, res);
})

app.listen(3000, () => {
	console.log("Server running on port 3000 sucessfull")
});
