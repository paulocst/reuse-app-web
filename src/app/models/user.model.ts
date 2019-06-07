export class User {
    type: string;
    id: number;
    username: string;
    description: string;

    constructor(username: string, description = 'this is a user') {
        this.type = 'user';
        this.id = new Date().getHours();
        this.username = username;
        this.description = description;
    }

}
