const fs = require('fs');
const cheerio = require('cheerio');

const baseUrl = 'https://pokemondb.net/pokedex/';
const natDexNo = 1;

let url = `${baseUrl}${natDexNo}`;

console.log($.root());
const getPokemonData = async () => {

    axios.get(url).then((response) => {
        // Load the HTML into cheerio
        const $ = cheerio.load(response.data);
    })
}
// loadPokemonPage(url);
// getPokemonData();
