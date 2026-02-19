import { CategoryService } from './../../../services/category-service';
import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu-service';
import { MenuModel } from '../../../models/menuModel';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-create-menu',
  standalone: false,
  templateUrl: './create-menu.html',
  styleUrl: './create-menu.css',
})
export class CreateMenu {
  private menuService = inject(MenuService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);

  menu: MenuModel = new MenuModel();

  create() {
    this.menuService.create(this.menu).subscribe({
      complete: () => {
        this.router.navigate(['admin/menu']);
      },
      error: (err) => console.error(err),
    });
  }

  categories = toSignal(this.categoryService.getAll(), { initialValue: [] });
}
