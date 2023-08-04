//const chalk = require('chalk'); forma legado de importar 
//console.log (chalk.blue('hello world'))

import chalk from "chalk"; //forma atual "import"
import fs from 'fs';

function fixError(badnews) {
    console.log(badnews);
    throw new Error(chalk.red(badnews.code, 'There is no file in this directory'));
}


//---------------------------------------------------------------------------------//

/* function takeFile(fileAdress) { //synchronous
    const encoding = 'utf-8';
    fs.readFile(fileAdress, encoding, (badnews, texto) => {
        if(badnews) {
            fixError(badnews);
        }
        console.log(chalk.green(texto))
    })
} */


//takeFile('./arquivos/texto.md');
//takeFile('../../../test.txt');


//---------------------------------------------------------------------------------//

/* function newTakeFile(fileAdress) { //asynchronous
    const encoding = 'utf-8';
    fs.promises
        .readFile(fileAdress, encoding)
        .then((text) => console.log(chalk.green(text)))
        .catch(fixError)
}

newTakeFile('./arquivos/text.md') */

// synchronous = read line by line (bad because it stops program until finish an function, in this case, read all the file)
// asynchronous = multiple thinks at same time (way better, because we never know how big will be an file)


//---------------------------------------------------------------------------------//

// async/await

async function finalTakeFile(fileAdress) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(fileAdress, encoding)
        console.log(extractLinks(text));
    } catch (badnews) {
        fixError(badnews)
    }
}

finalTakeFile('./arquivos/texto.md');


function extractLinks(text) {

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = [...text.matchAll(regex)];
    const results = capture.map(capture => ({ [capture[1]]: [capture[2]] }))
    return results;
}

