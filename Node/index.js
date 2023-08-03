//const chalk = require('chalk'); forma legado de importar 
//console.log (chalk.blue('hello world'))

import chalk from "chalk"; //forma atual "import"
import fs from 'fs';

function fixError (badnews) {
    console.log(badnews);
    throw new Error(chalk.red(badnews.code, 'There is no file in this directory'));
}

function takeFile(fileAdress) {
    const encoding = 'utf-8';
    fs.readFile(fileAdress, encoding, (badnews, texto) => {
        if(badnews) {
            fixError(badnews);
        }
        console.log(chalk.green(texto))
    })
}

//takeFile('./arquivos/texto.md');
takeFile('../../../test.txt');

