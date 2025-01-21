const cheerio = require('cheerio');
const fs = require('fs');

const baseUrl = 'https://pokemondb.net'

const NUM_PKMN = 1025;

/**
 * Scrapes the HTML contents of a page and saves it to the system
 * @param {string} url The url of the page to scrape
 * @param {string} fileName The name of the file the page contents will be saved to
 */
const saveHtmlPage = async (url, fileName) => {
    const res = await fetch(url);
    const resHtml = cheerio.load(await res.text());

    fs.writeFileSync(fileName, resHtml.html());
}

const getMovesPage = async () => {
    const url = baseUrl + '/move/all';

    saveHtmlPage(url, './html-pages/moves.html');
}

const getAbilitiesPage = async () => {
    const url = baseUrl + '/ability';

    saveHtmlPage(url, './html-pages/abilities.html');
}

const getPokemonPages = async () => {
    for (let i = 1; i <= NUM_PKMN; i++) {
        const url = baseUrl + `/pokedex/${i}`;

        const filename = `./html-pages/pokemon-pages/pokemon-${i}.html`;
        saveHtmlPage(url, filename);
    }
}

