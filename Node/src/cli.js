import chalk from "chalk";
import fs from 'fs';
import finalTakeFile from "./index.js";
import validationList from "./http-validation.js";

const adress = process.argv;

function printList(valid, result, fileName = '') {

    if (valid) {
        console.log(
            chalk.yellow(`Link list`),
            chalk.black.bgGreen(fileName),
            validationList(result));
    }
    else {
        console.log(
            chalk.yellow(`Link list`),
            chalk.black.bgGreen(fileName),
            result);
    }


}

async function TextProcess(arg) {

    const adress = arg[2];
    const valid = arg[3] === '--valid';


    try {
        fs.lstatSync(adress);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.red("File or directory doesn't exist"));
            return;
        }
    }

    if (fs.lstatSync(adress).isFile()) {
        const result = await finalTakeFile(arg[2])
        printList(valid, result)
    }
    else if (fs.lstatSync(adress).isDirectory()) {
        const files = await fs.promises.readdir(adress)
        files.forEach(async (fileName) => {
            const list = await finalTakeFile(`${adress}/${fileName}`)
            printList(valid, list, fileName);
        })
    }
}

TextProcess(adress);