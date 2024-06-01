#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue(`\n\n\t     _-^+-^+‾      ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦      ‾+^-+^-_`));
console.log(chalk.blue(`\t  <==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(`Welcome To Mustafa's  -  CLI Simple Calculator`)} ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t     ‾-∨+-∨+_      ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦      _+∨-+∨-‾\n\n`));
let Resume = "yes";
do {
    let array = [];
    let result;
    function operation(operator) {
        if (operator === "Addition") {
            return array.reduce((pre, nex) => { return pre + nex; });
        }
        else if (operator === "Substraction") {
            return array.reduce((pre, nex) => { return pre - nex; });
        }
        else if (operator === "Multiplication") {
            return array.reduce((pre, nex) => { return pre * nex; });
        }
        else if (operator === "Division") {
            return array.reduce((pre, nex) => { return pre / nex; });
        }
        else if (operator === "Exponent") {
            return array.reduce((pre, nex) => { return pre ** nex; });
        }
        else if (operator === "Modulus") {
            return array.reduce((pre, nex) => { return pre % nex; });
        }
    }
    let amountOfNumber = await inquirer.prompt([
        {
            type: 'number',
            name: 'numOfNum',
            message: chalk.rgb(255, 153, 0)('Enter the amount of numbers to calculate: ')
        },
    ]);
    if (amountOfNumber.numOfNum <= 1 || amountOfNumber.numOfNum >= 11 || Number.isNaN(amountOfNumber.numOfNum)) {
        console.log(chalk.rgb(255, 186, 102)(`Amount of numbers to calculate is only limited from 2-10`));
    }
    else {
        for (let i = 1; i <= amountOfNumber.numOfNum; i++) {
            let number = await inquirer.prompt([{
                    type: "number",
                    name: 'numbers',
                    message: chalk.rgb(255, 153, 0)(`Enter the ${i} number: `)
                },
            ]);
            if (!Number.isNaN(number.numbers)) {
                array.push(number.numbers);
            }
        }
        let answer = await inquirer.prompt([
            {
                type: "list",
                name: 'operator',
                message: chalk.rgb(255, 153, 0)('Enter the Operator: '),
                choices: [
                    chalk.rgb(255, 231, 92)("Addition"),
                    chalk.rgb(255, 231, 92)("Substraction"),
                    chalk.rgb(255, 231, 92)("Multiplication"),
                    chalk.rgb(255, 231, 92)("Division"),
                    chalk.rgb(255, 231, 92)("Exponent"),
                    chalk.rgb(255, 231, 92)("Modulus")
                ]
            }
        ]);
        if (answer.operator === chalk.rgb(255, 231, 92)("Addition")) {
            result = operation("Addition");
            console.log((`\t${chalk.rgb(7, 183, 237).bold(array.join(' + '))} = ${chalk.greenBright.bold(result)}`));
        }
        else if (answer.operator === chalk.rgb(255, 231, 92)("Substraction")) {
            result = operation("Substraction");
            console.log((`\t${chalk.rgb(7, 183, 237).bold(array.join(' - '))} = ${chalk.greenBright.bold(result)}`));
        }
        else if (answer.operator === chalk.rgb(255, 231, 92)("Multiplication")) {
            result = operation("Multiplication");
            console.log((`\t${chalk.rgb(7, 183, 237).bold(array.join(' x '))} = ${chalk.greenBright.bold(result)}`));
        }
        else if (answer.operator === chalk.rgb(255, 231, 92)("Division")) {
            result = operation("Division");
            console.log((`\t${chalk.rgb(7, 183, 237).bold(array.join(' / '))} = ${chalk.greenBright.bold(result)}`));
        }
        else if (answer.operator === chalk.rgb(255, 231, 92)("Exponent")) {
            result = operation("Exponent");
            console.log((`\t${chalk.rgb(7, 183, 237).bold(array.join(' ^ '))} = ${chalk.greenBright.bold(result)}`));
        }
        else if (answer.operator === chalk.rgb(255, 231, 92)("Modulus")) {
            result = operation("Modulus");
            console.log((`\t${chalk.rgb(7, 183, 237).bold(array.join(' % '))} = ${chalk.greenBright.bold(result)}`));
        }
    }
    const continuation = await inquirer.prompt([{
            type: "list",
            name: 'decision',
            message: chalk.rgb(255, 155, 0)("Do you want to continue using the calculator?: "),
            choices: [chalk.greenBright.bold("YES"), chalk.rgb(255, 231, 92).redBright("NO")]
        }]);
    Resume = continuation.decision;
} while (Resume !== chalk.rgb(255, 231, 92).redBright("NO"));
