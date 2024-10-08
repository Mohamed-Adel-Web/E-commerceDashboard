import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-side-nav',
  standalone: true,
  imports: [RouterLink, MatIconModule, NgClass],
  templateUrl: './admin-side-nav.component.html',
  styleUrl: './admin-side-nav.component.scss',
})
export class AdminSideNavComponent {
  open = input.required<boolean>();

  links: { title: string; href: string; icon: string }[] = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: `home`,
    },
    {
      title: 'Category',
      href: '/admin/category',
      icon: 'category',
    },

    {
      title: 'Sub Category',
      href: 'sub-category',
      icon: 'category',
    },
    {
      title: 'Brand',
      href: 'brand',
      icon: 'branding_watermark',
    },
    {
      title: 'Product',
      href: 'product',
      icon: 'inventory',
    },
  ];
}
