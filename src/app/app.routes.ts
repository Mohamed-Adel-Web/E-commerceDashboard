import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import path from 'path';
import { authGuard } from './cors/guards/auth.guard';
import { loggedGuard } from './cors/guards/logged.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [loggedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },

      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      {
        path: 'admin',
        loadComponent: () =>
          import('./components/admin/admin.component').then(
            (m) => m.AdminComponent
          ),
      },
      {
        path: 'admin/category',
        loadComponent: () =>
          import('./components/category/category.component').then(
            (m) => m.CategoryComponent
          ),
      },
      {
        path: 'admin/sub-category',
        loadComponent: () =>
          import('./components/sub-category/sub-category.component').then(
            (m) => m.SubCategoryComponent
          ),
      },
    ],
  },
];
