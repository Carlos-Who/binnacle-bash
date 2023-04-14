import {Task} from "./task.js";

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

}



