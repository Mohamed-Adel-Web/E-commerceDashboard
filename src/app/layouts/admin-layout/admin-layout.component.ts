import { Component, WritableSignal, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminSideNavComponent } from '../../components/admin-side-nav/admin-side-nav.component';
import { AdminNavComponent } from '../../components/admin-nav/admin-nav.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    AdminSideNavComponent,
    AdminNavComponent,
    NgClass,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  open: WritableSignal<boolean> = signal(true);
  toggleSideNav(): void {
    this.open.set(!this.open());
  }
  closeSideNav(): void {
    this.open.set(false);
  }
}
