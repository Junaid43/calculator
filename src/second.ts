import { stopAnimation } from "./first.js";

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


export async function calculationValue() {

    const calculatorIntro = chalkAnimation.karaoke('Now you will calculate the result by two number');
    calculatorIntro.start(); // Animation start

    await stopAnimation();

    calculatorIntro.stop();

  const answers = await inquirer
    .prompt([
      {
        type: "list",
        name:"operator",
        message:"Choose any operation you want to perform",
        choices:["Addition", "Substraction","Multiplication", "Division","Modulo", "Exponentiation"]
    },

    {
        type:"number",
        name:"num1",
        message: "Enter the value of number 1",
        
       
    },

    {
        type:"number",
        name:"num2",
        message: "Enter the value of number 2",
       
    },
   
    ]);


    
      if(answers.operator =="Addition"){
        console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
      }
      else if(answers.operator =="Substraction"){
        console.log(chalk.blue(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
      }

     else if(answers.operator =="Multiplication"){
        console.log(chalk.blue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
      }

     else if(answers.operator =="Division"){
        console.log(chalk.blue(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
      }

      else if(answers.operator =="Modulo"){
        console.log(chalk.blue(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`));
      }

      else {
        console.log(chalk.blue(`${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2}`));
      }

    
    
}


