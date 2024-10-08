import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../cors/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _FormBuilder = inject(FormBuilder);
  private readonly _ToasterService = inject(ToastrService);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });
  loginSubmit(): void {
    if (this.loginForm.valid) {
      this._AuthService.setLoginData(this.loginForm.value).subscribe({
        next: (res) => {
          this._ToasterService.success(res.message);
          localStorage.setItem('token', res.token);
          setTimeout(() => {
            this._Router.navigate(['/admin']);
          }, 1000);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
