import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Category } from '../../cors/interfaces/category';
import { AddCategoryDialogComponent } from '../dialogs/categoryDialogs/add-category-dialog/add-category-dialog.component';
import { MatDialog } from '@angular/material/dialog';

const ELEMENT_DATA: Category[] = [
  {
    name: 'clothes',
    image: 'https://techzaa.in/larkon/admin/assets/images/product/p-1.png',
  },
  {
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

  displayedColumns: string[] = ['name', 'image'];

  dataSource = ELEMENT_DATA;
  openDialog(): void {
    this.dialog.open(AddCategoryDialogComponent, {
      width: '700px',
    });
  }
}
