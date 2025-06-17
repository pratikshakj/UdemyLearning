import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('New Recipe in my diary',
      'Lets prepare in magical day',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaP6IeJ0IDNrkz9R65hm8WMfRHCdbKPkg5PQ&s'),
     new Recipe('New Recipe in my diary',
      'Lets prepare in magical day',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaP6IeJ0IDNrkz9R65hm8WMfRHCdbKPkg5PQ&s'),
     new Recipe('New Recipe in my diary',
      'Lets prepare in magical day',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaP6IeJ0IDNrkz9R65hm8WMfRHCdbKPkg5PQ&s'),
     new Recipe('New Recipe in my diary',
      'Lets prepare in magical day',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaP6IeJ0IDNrkz9R65hm8WMfRHCdbKPkg5PQ&s')];
  constructor() {}

  ngOnInit(): void {}
}
