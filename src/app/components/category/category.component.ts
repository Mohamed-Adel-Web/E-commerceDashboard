import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ICategory } from '../../cors/interfaces/category';
import { AddCategoryDialogComponent } from '../dialogs/categoryDialogs/add-category-dialog/add-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryDialogComponent } from '../dialogs/categoryDialogs/edit-category-dialog/edit-category-dialog.component';
import { Eaction } from '../../cors/interfaces/Dialog';
import { DeleteCategoryDialogComponent } from '../dialogs/categoryDialogs/delete-category-dialog/delete-category-dialog.component';

const ELEMENT_DATA: ICategory[] = [
  {
    id: 'qefewf',
    name: 'clothes',
    image: 'https://techzaa.in/larkon/admin/assets/images/product/p-1.png',
  },
  {
    id: 'afafef',
    name: 'electronics',
    image: 'https://techzaa.in/larkon/admin/assets/images/product/p-11.png',
  },
];
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['name', 'image', 'id', 'action'];

  dataSource = ELEMENT_DATA;
  openDialog(type: 'add' | 'update' | 'delete', category?: ICategory): void {
    switch (type) {
      case Eaction.update:
        this.dialog.open(EditCategoryDialogComponent, {
          width: '700px',
          data: category,
        });
        break;
      case Eaction.add:
        this.dialog.open(AddCategoryDialogComponent, {
          width: '700px',
        });
        break;
      case Eaction.delete:
        this.dialog.open(DeleteCategoryDialogComponent, {
          width: '700px',
          data: category,
        });
        break;
    }
  }
}
