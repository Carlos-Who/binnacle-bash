
import chalk from 'chalk';
import { displayMenu } from './helpers/menus/main-menu.js'
import { displayHeader } from './helpers/messages/welcome.js'

import alert from './helpers/alerts/alerts.js'

import { Task } from "./models/task.js";
import {Tasks} from "./models/tasks.js";

console.clear();

const main = async () => {
    let selectedOption = 0;
    const tareas = new Tasks();

    await displayHeader();
    console.log('');
    let count = 0;


    do {
        console.clear();
        await displayHeader();
        console.log('');

        selectedOption = await displayMenu();

        // console.log('Opción seleccionada: ', selectedOption);


        switch (selectedOption) {
            case 1:
                console.clear();
                await displayHeader();
                console.log('');

                let newTaskOption = 0;

                do {
                    newTaskOption = await alert.confirmCreateNewTask();
                    // console.log(newTaskOption);
                    if(newTaskOption === 1) {
                        console.log("Creando nueva tarea");
                        await alert.standardPause();
                    }
                } while (newTaskOption !== 0);

                // console.log("Salimos al menu");
                //
                //
                // await alert.standardPause();

            break;

            case 2:
                console.log(tareas._taskList);
            break;
        }


    } while (selectedOption !== 0);

    console.log("Salio de la aplicación");


}


main();