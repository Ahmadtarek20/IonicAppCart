import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  registerMode= false ;

  constructor() { }

  ngOnInit() {
  }
  registerToggle(){
    this.registerMode = true;
  }
  cancelRegisterMod(registerMode : boolean){
    this.registerMode = registerMode;
  }
  

}