import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  user = new User('Pinkman_03');
  product = new Product('wood', this.user, 'wood in a corner');

  constructor() { }

}
