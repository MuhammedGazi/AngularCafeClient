import { Component, signal } from '@angular/core';
import { CategoryModel } from './models/categoryModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title:string="kategoriler";
  category:CategoryModel;
  categories:CategoryModel[]=[
    {id:1,name:"yazilim"},
    {id:2,name:"deneme"},
    {id:3,name:"merhaba"}];
}
