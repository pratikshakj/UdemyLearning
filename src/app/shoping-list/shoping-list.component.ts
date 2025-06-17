import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.scss',
})
export class ShopingListComponent {
  ingredients: Ingredients[] = [new Ingredients('Apples', 160),
    new Ingredients('Tomates', 60),
    new Ingredients('Bread', 30)]; // need to create an model for this

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.Add 'implements OnInit' to the class.
  }
}
