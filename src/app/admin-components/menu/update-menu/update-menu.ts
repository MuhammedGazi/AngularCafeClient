import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu-service';
import { Router } from '@angular/router';
import { MenuModel } from '../../../models/menuModel';
import { CategoryService } from '../../../services/category-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-menu',
  standalone: false,
  templateUrl: './update-menu.html',
  styleUrl: './update-menu.css',
})
export class UpdateMenu implements OnInit {
  @Input() id: string;
  private menuService = inject(MenuService);
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private cdr=inject(ChangeDetectorRef)

  menu: MenuModel = new MenuModel();

  ngOnInit(): void {
    const menuId = Number(this.id);
    this.menuService.getById(menuId).subscribe({
      next: response => {
        this.menu = response;
        this.cdr.detectChanges();
        console.log(menuId,this.menu);
      },
      error: err => console.log(err),
    });
  }
  categories = toSignal(this.categoryService.getAll(), { initialValue: [] });

  update() {
    this.menuService.update(this.menu.id, this.menu).subscribe({
      complete: () => this.router.navigate(['admin/menu']),
      error: (err) => console.log(err),
    });
  }

}
