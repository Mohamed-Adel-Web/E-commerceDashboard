import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CategoryService } from '../../../../cors/services/category.service';
import { ICategory } from '../../../../cors/interfaces/category';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-category-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
  ],
  templateUrl: './delete-category-dialog.component.html',
  styleUrl: './delete-category-dialog.component.scss',
})
export class DeleteCategoryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICategory) {}

  _FormBuilder = inject(FormBuilder);
  deleteForm: FormGroup = this._FormBuilder.group({});
  _CategoryService = inject(CategoryService);
  onSubmit(event: Event): void {
    event.preventDefault();
    this._CategoryService.deleteCategory(this.data.id).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
