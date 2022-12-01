#! /usr/bin/env node
import inquirer from "inquirer";
import { calculationValue } from "./second.js";
async function startCalculationAgain() {
    do {
        await calculationValue();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to calculation again ? Press Y or No"
        });
    } while (playAgain.restart == 'y' || playAgain.restart == 'Y' || playAgain.restart == 'YES' || playAgain.restart == 'Yes' || playAgain.restart == 'yes');
}
startCalculationAgain();
// console.log(chalk.blue("Insha Allah, in " + 60 + " years you will be 60 years old."));
