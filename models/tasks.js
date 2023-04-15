import {Task} from "./task.js";
import chalk from "chalk";

export class Tasks {

    _taskList;

    constructor() {
        this._taskList = {};
    }

    get taskListArray() {
        const taskList = [];

        Object.keys(this._taskList).forEach( key => {
            const task = this._taskList[key]
            taskList.push(task);
        });

        return taskList;
    }


    createTask(title, description) {
        const newTask = new Task(title, description);
        this._taskList[newTask.id] = newTask;
    }


    loadTaskFromArray( tasks = [] ) {

        tasks.forEach( task => {
            this._taskList[task.id] = task;
        });
    }


    displayAllTasks() {
        console.log();
        this.taskListArray.forEach( (task, i) => {

            const idx = `${ chalk.green(i + 1)}`;
            const { title, isComplete } = task;
            const status = ( isComplete )
                ? `${ chalk.green('Completada') }`
                : `${ chalk.red('Pendiente') }`;

            console.log(`${ idx } ${ title } :: ${ status }`);

        });
    }
}



