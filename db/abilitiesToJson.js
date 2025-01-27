const fs = require('fs');
const scrapy = require('node-scrapy');

const getAbilities = () => {
    const url = "https://pokemondb.net/ability";

    let abilityJSON = '';

    const model = {
        abilities: [
            '#abilities tbody tr',
            {
                name: 'td:nth-child(1) a',
                description: 'td:nth-child(3)',
            }
        ],
    };

    fetch(url)
        .then((res) => res.text())
        .then((body) => {
            let extracted = scrapy.extract(body, model);
            abilityJSON = extracted;
            fs.writeFileSync(`./src/json/abilities.json`, JSON.stringify(abilityJSON), 'utf-8', (err) => {
                console.log(`Error: ${err}`);
                return err;
            });
        })
        .catch(console.error);
};

getAbilities();
