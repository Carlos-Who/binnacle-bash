import {Task} from "./task.js";

export class Tasks {

    _taskList;

    constructor() {
        this._tasks = {};
    }


    createTask(description) {
        const task = new Task(description);
        this._taskList[task.id] = task;
    }

}
