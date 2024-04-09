#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(`\n\t\t${chalk.rgb(0, 183, 255).bold("Welcome to Mustafa - Calculator")}\n`);
let Resume = "yes";
do {
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: 'firstnum',
            message: chalk.rgb(255, 153, 0)('Enter the first number: ')
        },
        {
            type: "number",
            name: 'secondnum',
            message: chalk.rgb(255, 153, 0)('Enter the second number: ')
        },
        {
            type: "list",
            name: 'operator',
            message: chalk.rgb(255, 153, 0)('Enter the first number: '),
            choices: [
                chalk.rgb(255, 231, 92)("Addition"),
                chalk.rgb(255, 231, 92)("Substraction"),
                chalk.rgb(255, 231, 92)("Multiplication"),
                chalk.rgb(255, 231, 92)("Division"),
                chalk.rgb(255, 231, 92)("Exponent"),
                chalk.rgb(255, 231, 92)("Modulus"),
                chalk.rgb(255, 231, 92)("None")
            ]
        }
    ]);
    if (answer.operator === chalk.rgb(255, 231, 92)("Addition")) {
        console.log(chalk.rgb(255, 186, 102)(`The Sum of your number is:${chalk.greenBright.bold(answer.firstnum + answer.secondnum)}`));
    }
    else if (answer.operator === chalk.rgb(255, 231, 92)("Substraction")) {
        console.log(chalk.rgb(255, 186, 102)(`The Sum of your number is:${chalk.greenBright.bold(answer.firstnum - answer.secondnum)}`));
    }
    else if (answer.operator === chalk.rgb(255, 231, 92)("Multiplication")) {
        console.log(chalk.rgb(255, 186, 102)(`The Sum of your number is:${chalk.greenBright.bold(answer.firstnum * answer.secondnum)}`));
    }
    else if (answer.operator === chalk.rgb(255, 231, 92)("Division")) {
        console.log(chalk.rgb(255, 186, 102)(`The Sum of your number is:${chalk.greenBright.bold(answer.firstnum / answer.secondnum)}`));
    }
    else if (answer.operator === chalk.rgb(255, 231, 92)("Exponent")) {
        console.log(chalk.rgb(255, 186, 102)(`The Sum of your number is:${chalk.greenBright.bold(answer.firstnum ** answer.secondnum)}`));
    }
    else if (answer.operator === chalk.rgb(255, 231, 92)("Modulus")) {
        console.log(chalk.rgb(255, 186, 102)(`The Sum of your number is:${chalk.greenBright.bold(answer.firstnum % answer.secondnum)}`));
    }
    else {
        console.log(chalk.redBright.bold('You must select an operator!'));
    }
    const continuation = await inquirer.prompt([{
            type: "list",
            name: 'decision',
            message: chalk.rgb(255, 155, 0)("Do you want to continue using the calculator?: "),
            choices: [chalk.greenBright.bold("YES"), chalk.rgb(255, 231, 92).redBright("NO")]
        }]);
    Resume = continuation.decision;
} while (Resume !== chalk.rgb(255, 231, 92).redBright("NO"));
