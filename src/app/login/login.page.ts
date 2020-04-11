import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { Router } from '@angular/router';
import { Login } from '../Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model:Login;
  constructor(public authService: AuthService ,private router: Router) { }

  ngOnInit() {
    this.model = {Password: '', Email: ''};
  }

  logiin(){
    console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      this.router.navigate(['/product']);
      console.log('Done')
    },error => {
     console.log('error')
    }, () => {
      this.router.navigate(['/products']);
    });
  }
  loggedin(){
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    //this.aleartfy.successs('Logged Out');
    this.router.navigate(['/home']);
  }
}
