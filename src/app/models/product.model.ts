import { User } from './user.model';
export class Product {
    productType: string;
    type: string;
    user: User;
    id: number;
    name: string;
    viewers: number;
    description: string;
    avaible: boolean;
    publicationDate: Date;

    constructor(productType: string, user: User, name: string, description: string = 'this is a product') {
        this.productType = productType;
        this.type = 'product';
        this.user = user;
        this.id = new Date().getHours();
        this.name = name;
        this.viewers = 0;
        this.description = description;
        this.avaible = true;
        this.publicationDate = new Date();
    }
}
