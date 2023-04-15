
import chalk from 'chalk';
import { displayMenu } from './helpers/menus/main-menu.js'
import { displayHeader } from './helpers/messages/welcome.js'

import alert from './helpers/alerts/alerts.js'

import { Task } from "./models/task.js";
import {Tasks } from "./models/tasks.js";
import { setTaskDescription, setTaskTitle } from "./helpers/messages/tasks/task.message.js";
import { consultData, saveData} from "./helpers/actions/data-actions.js";

console.clear();




const main = async () => {

    let selectedOption = 0;
    const tasks = new Tasks();

    const dataDB = consultData();

    if(dataDB) {
        tasks.loadTaskFromArray(dataDB);
    }
    await alert.standardPause();

    await displayHeader();

    do {

        await displayHeader();
        selectedOption = await displayMenu();

        switch (selectedOption) {

            case 1:
                await displayHeader();

                let newTaskOption = 0;

                do {
                    newTaskOption = await alert.confirmCreateNewTask();

                    if(newTaskOption === 1) {

                        await displayHeader();
                        console.log("Agrega un titulo para tu nueva tarea.");
                        const title = await setTaskTitle("Titulo:");
                        const description = await setTaskDescription();
                        tasks.createTask(title, description);
                        // await alert.standardPause();

                    }
                    
                } while (newTaskOption !== 0);


            break;

            case 2:
                tasks.displayAllTasks();
            break;

            case 3:

            break;
        }

        saveData(tasks.taskListArray);
        await alert.standardPause();
    } while (selectedOption !== 0);

    console.log("Salio de la aplicación");

}


main();




