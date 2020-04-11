import { Component , OnInit } from '@angular/core';
import { AuthService } from '../servecies/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit  {
  constructor(public authService: AuthService ,
    private router: Router) {}
    ngOnInit() {

    }
    loggedin(){
      const token = localStorage.getItem('token');
      return !!token;
    }
    logout(){
      localStorage.removeItem('token');
      this.router.navigate(['/tabs/home']);
    }
  }