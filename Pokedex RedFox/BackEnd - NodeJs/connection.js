const mysql = require('mysql');
const util = require('util');
const utf8 = require('utf8');
const request = require('request');

//Configurando Conecção ao banco
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bdPokedex'
});

//Realizando conecção
connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!');
})


//Metodo que retonar todos os pokemons
exports.getPokemons = function(res){
    var query = "SELECT * from tbpokemon";
    execute(res, query);
}

//Meteodo para pegar um unico pokemon
exports.getPokemonCod = function(req, res){
    let pokemon = req.body;
    var query = "SELECT *, DATE_FORMAT(dataCadastro, '%d/%m/%Y') as 'dataFormatada' from tbPokemon where codPokemon = " + pokemon.codPokemon;
    execute(res, query);
}

//Procurar um Pokemon
exports.searchPokemon = function(req, res){
    var pokemon = req.body
    var query = util.format("SELECT * from tbPokemon where nomePokemon like '%"+pokemon.nomePokemon+"%'");
    execute(res, query);
}


//Metodo que cadastra um novo pokemon
exports.cadPokemon = async function(req, res){
    pokemon = req.body;
    var data = new Date();
    var dia = data.getDate();   
    var mes = data.getMonth();
    var ano = data.getFullYear();
    mes += 1;
    if(mes <= 9){
        mes = '0' + mes;
    }
    var str_data = ano + '-' + mes + '-' + dia;
    
    // VV FEATURE DA PESQUISA DE IMAGEM AUTOMATICA AQUI VV //

    let nome = pokemon.nomePokemon.toLowerCase();
    let url = 'https://pokeapi.co/api/v2/pokemon/' + nome + '/';

    const resp = res;
    await request(url, function(err, res, body){
        var imgPoke = '';
        if(body == 'Not Found'){
            imgPoke = 'https://i.ya-webdesign.com/images/pokeball-pixel-png-2.png';
        }else{
            let data = JSON.parse(body);
            console.log(data.sprites.front_default);
            imgPoke = data.sprites.front_default;
        }


        var query = util.format("insert into tbPokemon(nomePokemon, forcaPokemon, velPokemon, tipoPokemon, habilidadePokemon, fotoPokemon, dataCadastro) VALUES (\'%s\',%s,%s,\'%s\',\'%s\', \'%s\', \'%s\')" , pokemon.nomePokemon, pokemon.forcaPokemon, pokemon.velPokemon, pokemon.tipoPokemon, pokemon.habilidadePokemon, imgPoke, str_data)
        console.log(str_data);
        execute(resp, query);
    })
    // ^^ FEATURE DA PESQUISA DE IMAGEM AUTOMATICA AQUI ^^ //

}


//Metodo que apaga um pokemon
exports.delPokemon = function(req, res){
    pokemon = req.body;
    
    var query = util.format("delete from tbPokemon where codPokemon = %s", pokemon.codPokemon);
    execute(res, query)
}

//Metodo para editar um pokemon cadastrado
exports.editPokemon = function(req, res){
    pokemon = req.body;

    


    var query = util.format("UPDATE tbpokemon set nomePokemon = \'%s\', forcaPokemon = %s, velPokemon = %s, habilidadePokemon = \'%s\', tipoPokemon = \'%s\' WHERE codPokemon = %s", pokemon.nomePokemon, pokemon.forcaPokemon, pokemon.velPokemon, pokemon.habilidadePokemon, pokemon.tipoPokemon, pokemon.codPokemon);
    execute(res, query);
}


//Metodo que executa uma query
function execute(res, query){
    connection.query(query, function(err, results, fields){
        if(err) return console.log(err);
        res.send(results);
    })
}
