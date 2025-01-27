const fs = require('fs');
const cheerio = require('cheerio');
const scrapy = require('node-scrapy');

const getMoves = () => {

    const url = 'https://pokemondb.net/move/all';

    let movesJSON = ``;

    const model = {
        moves: [
            '#moves tbody tr',
            {
                name: `td:nth-child(1) a`,
                type: 'td:nth-child(2) a',
                category: 'td:nth-child(3) img (title)',
                effect: 'td:nth-child(7)',
                power: 'td:nth-child(4)',
                accuracy: 'td:nth-child(5)',
                pp: 'td:nth-child(6)',
            }]
    };

    fetch(url)
        .then((res) => res.text())
        .then((body) => {
            let extracted = scrapy.extract(body, model);
            movesJSON = extracted;
            fs.writeFileSync(`./src/json/moves.json`, JSON.stringify(movesJSON), 'utf-8', (err) => {
                console.log(`Error: ${err}`);
                return err;
            });
        })
        .catch(console.error);
}
// getMoves();
