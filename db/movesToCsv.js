const fs = require('fs');
const cheerio = require('cheerio');

const filepath = `/src/html-pages/moves.html`;

const getAttributes = async () => {
    const file = fs.readFileSync(`${__dirname}/${filepath}`, 'utf-8', (err, data) => {
        console.log(err);
        return err;
    });
    // const file = await fetch(filepath);

    let movesCsv = 'id,name,type,effect,category,power,accuracy';

    console.log(file);

    const temp = cheerio.fromURL(filepath);
    console.log(temp);
}

getAttributes();
