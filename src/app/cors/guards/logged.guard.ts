import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const _PLATFORM_ID = inject(PLATFORM_ID);
  const _Router = inject(Router);
  if (isPlatformBrowser(_PLATFORM_ID)) {
    if (localStorage.getItem('token') !== null) {
      _Router.navigate(['/admin']);
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
