import {
  Component,
  EventEmitter,
  inject,
  input,
  Output,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.scss',
})
export class AdminNavComponent {
  _Router = inject(Router);
  open = input.required<boolean>();
  @Output() toggleSideNav = new EventEmitter();
  sideNavOpenChange(): void {
    this.toggleSideNav.emit();
  }
  settingOpen: WritableSignal<boolean> = signal(false);
  handleLogout(): void {
    localStorage.removeItem('token');
    this._Router.navigate(['/login']);
  }
  handleSettingOpen(): void {
    this.settingOpen.set(!this.settingOpen());
  }
}
