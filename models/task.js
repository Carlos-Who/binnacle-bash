
import { v4 as uuidv4 } from 'uuid';
export class Task {

    id;
    title;
    description;
    isComplete;
    createdAt;

    constructor(title, description) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.isComplete = false;
        this.createdAt = "";
    }

}
