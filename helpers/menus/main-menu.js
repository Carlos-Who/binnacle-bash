
import chalk from 'chalk';
import inquirer from 'inquirer';
import boxen from 'boxen';



const menuOptions = [
    {
        type: "list",
        name: "optionMenu",
        message: "This is your Binnacle Bash menu.",
        choices: [
            {
                value: 1,
                name: "1. Crear nueva tarea"
            },
            {
                value: 2,
                name: "2. Ver todas las tareas"
            },
            {
                value: 3,
                name: "3. Marcar tarea como completada"
            },
            {
                value: 0,
                name: "0. Salir"
            }
        ],
    }
];



async function displayMenu() {

    const { optionMenu } = await inquirer.prompt(menuOptions);

    return optionMenu;
}







export { displayMenu };





//  Form Task Titles
// console.log(boxen(welcome, {
//     title: 'BINNACLE BASH',
//     titleAlignment: 'center',
//     borderColor: "green",
//     padding: {
//         top: 0,
//         bottom: 0,
//         left: 1,
//         right: 1,
//     },
// }));