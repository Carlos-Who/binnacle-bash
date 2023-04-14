
import inquirer from "inquirer"; // Manage prompt interactions...
import readline from 'readline';
import chalk from 'chalk';






export async function setTaskTitle(message) {

   const question = [
      {
         type: "input",
         name: "title",
         message: message,
         validate(value) {
            if(value.length === 0) {
               return "El campo titulo no puede estar vacío."
            }
            return true;
         }

      }
   ];

   const { title } = await inquirer.prompt(question);
   return title;
}


export function setTaskDescription() {

   return new Promise((resolve) => {
      const rl = readline.createInterface({
         input: process.stdin,
         output: process.stdout
      });

      let taskDescription = '';

      console.log(`\nAgrega una descripción para la tarea. \n- cuando termines, escribe un ${chalk.green("punto")} "." en una línea nueva y presiona ${chalk.green("Enter")}.`);

      rl.on('line', (input) => {
         if (input === '.') {
            rl.close();
         } else {
            taskDescription += input + '\n';
         }
      });

      rl.on('close', () => {
         resolve(taskDescription);
      });
   });
}


