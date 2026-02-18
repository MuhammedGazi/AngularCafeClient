import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu-service';
import { toSignal } from '@angular/core/rxjs-interop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private menuService = inject(MenuService);
  menus = toSignal(this.menuService.getAll(), { initialValue: [] });

  delete(id: number) {
    Swal.fire({
      title: 'simek istediğinize emin misiniz?',
      text: 'bu işlem geri alınamaz!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'evet sil!',
      cancelButtonText: 'iptal',
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.delete(id).subscribe({
          complete: () => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
          error: (err) => console.error(err),
        });
      }
    });
  }
}
