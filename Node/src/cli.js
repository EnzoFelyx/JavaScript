import chalk from "chalk";
import finalTakeFile from "./index.js";

const adress = process.argv;

async function TextProcess(adress) {
    const result = await finalTakeFile(adress[2])
    console.log(chalk.yellow('link list'), result);
}

TextProcess(adress);