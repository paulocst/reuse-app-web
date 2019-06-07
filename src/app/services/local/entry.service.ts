import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  user: User;
  product: Product;
  entries: Product[] = [];

  constructor() {
    this.user = new User('Pinkman_03');
    this.product = new Product('wood', this.user, 'wood in a corner');
    this.setEntry(this.product);
  }

  setEntry(product: Product) {
    this.entries.push(product);
  }

}
