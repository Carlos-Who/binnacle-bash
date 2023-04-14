
import { uuid } from "uuidv4";

export class Task {

    id;
    description;
    createdAt;

    constructor(description) {
        this.id = uuid();
        this.description = description;
        this.createdAt = "";
    }

}
