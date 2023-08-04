import chalk from "chalk";
import fs from 'fs';
import finalTakeFile from "./index.js";

const adress = process.argv;

function printList(result) {
    console.log(chalk.yellow('Link lista'), result)
}

async function TextProcess(arg) {

    const adress = arg[2];

    if (fs.lstatSync(adress).isFile()) {
        const result = await finalTakeFile(arg[2])
        printList(result)
    }
    else if (fs.lstatSync(adress).isDirectory()) {
        const files = await fs.promises.readdir(adress)
        files.forEach(async (fileName) => {
            const list = await finalTakeFile(`${adress}/${fileName}`)
            printList(list);
        })
    }
}

TextProcess(adress);