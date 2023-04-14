
import chalk from 'chalk';
import figlet from 'figlet'; // ASCII Text art...
import inquirer from "inquirer"; // Manage prompt interactions...






export async function welcome() {
    const question = [
        {
           type: "input",
           name: "enter",
           message: `Welcome to ${chalk.blue('Binnacle Bash!')} press ${chalk.green('ENTER')} to continue...`,
        }
    ];
    await inquirer.prompt(question);
}

export async function standardPause() {
   const question = [
      {
         type: "input",
         name: "enter",
         message: `Presione ${chalk.blue('ENTER')} para continuar...`,
      }
   ];
   await inquirer.prompt(question);
}

export async function confirmCreateNewTask() {
   const question = [
      {
         type: "list",
         name: "confirmNewTask",
         message: "Crear una nueva tarea...",
         choices: [
            {
               value: 1,
               name: "1. Aceptar y crear nueva tarea."
            },
            {
               value: 0,
               name: "2. Volver al menú"
            }
         ]
      }
   ];
   const { confirmNewTask } = await inquirer.prompt(question);
   return confirmNewTask;
}

export async function confirmDelete() {

}

export async function confirmSave() {

}

export async function confirmExit() {

}


const alert = {
   welcome,
   standardPause,
   confirmCreateNewTask,
   confirmDelete,
   confirmSave,
   confirmExit
};

export default alert;