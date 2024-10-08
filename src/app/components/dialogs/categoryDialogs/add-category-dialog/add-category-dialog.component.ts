import {
  ChangeDetectionStrategy,
  Component,
  inject,

} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../../cors/services/category.service';
@Component({
  selector: 'app-add-category-dialog',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-category-dialog.component.html',
  styleUrl: './add-category-dialog.component.scss',
})
export class AddCategoryDialogComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _CategoryService = inject(CategoryService);
  addCategoryForm: FormGroup = this._FormBuilder.group({
    name: ['', [Validators.required]],
    image: [null, Validators.required],
  });
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.addCategoryForm.patchValue({ image: file });
      this.addCategoryForm.get('image')?.updateValueAndValidity();
    }
  }
  onSubmit(): void {
    if (this.addCategoryForm.valid) {
      const formData = new FormData();
      formData.append('name', this.addCategoryForm.get('name')?.value);
      formData.append('image', this.addCategoryForm.get('image')?.value);
      this._CategoryService.addCategory(formData).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    } else {
      this.addCategoryForm.markAllAsTouched();
    }
  }
}
