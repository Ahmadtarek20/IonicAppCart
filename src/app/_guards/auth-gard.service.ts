import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servecies/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {
  constructor(private authService: AuthService  ,
    private router: Router){}

  canActivate(): boolean {
    if(!this.authService.loggedIn()){
      return true;
    }
    // this.aleartfy.error('You Shall not Pass!!');
     this.router.navigate(['/home']);
     return false;

    }
}
