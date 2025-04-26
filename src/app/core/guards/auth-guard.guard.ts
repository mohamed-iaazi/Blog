import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('login') != null) {
    return true;
  } else {
    router.navigate(['/login']); // <-- redirect to login
    return false;
  }
};

