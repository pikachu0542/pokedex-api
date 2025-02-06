const fs = require('fs');
const csvjson = require('csvjson');
const { json } = require('stream/consumers');


const jsonToCSV = (jsonFile, outputFile) => {
    fs.readFile(jsonFile, 'utf-8', (err, fileContent) => {
        if (err) {
            console.error(err);
            return;
        }

        const csvData = csvjson.toCSV(fileContent, {
            headers: 'key'
        });

        fs.writeFile(outputFile, csvData, 'utf-8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Conversion successful. CSV file created.');
        });
    });
};

// jsonToCSV('./src/json/moves.json', './data/moves.csv');
jsonToCSV('./src/json/abilities.json', './data/abilities.csv');
