import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../../cors/services/category.service';
import { ICategory } from '../../../../cors/interfaces/category';

@Component({
  selector: 'app-edit-category-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-category-dialog.component.html',
  styleUrl: './edit-category-dialog.component.scss',
})
export class EditCategoryDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICategory) {}
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _CategoryService = inject(CategoryService);
  editCategoryForm: FormGroup = this._FormBuilder.group({
    name: ['', [Validators.required]],
    image: [null],
  });
  ngOnInit(): void {
    this.editCategoryForm.patchValue({
      name: this.data.name,
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.editCategoryForm.patchValue({ image: file });
      this.editCategoryForm.get('image')?.updateValueAndValidity();
    }
  }
  onSubmit(): void {
    if (this.editCategoryForm.valid) {
      const formData = new FormData();
      formData.append('name', this.editCategoryForm.get('name')?.value);
      if (this.editCategoryForm.get('image')?.value) {
        formData.append('image', this.editCategoryForm.get('image')?.value);
      }
      this._CategoryService.updateCategory(formData, this.data.id).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    } else {
      this.editCategoryForm.markAllAsTouched();
    }
  }
}
