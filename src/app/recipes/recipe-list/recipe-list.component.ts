import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  recipes:Recipe[] =[
    new Recipe('steak','Very tasty','./assets/steak.jpg/'),
    new Recipe('steak','Very tasty','./assets/steak.jpg/')
  ];
  ngOnInit() {
  }

}
