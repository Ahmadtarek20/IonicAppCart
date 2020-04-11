import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Register } from '../Models/Register';
import { AuthService } from '../servecies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @Output() cancelRegister = new EventEmitter();


  model:Register;
  registerForm: FormGroup;

  constructor(private authService : AuthService ,
    private fb: FormBuilder ,  private router: Router ) {
    this.model = {Email: '',Password: '', ConfirmPassword : ''};
 }

  ngOnInit() {
    //this.creatRegister();
  }
  creatRegister(){
    this.registerForm = new FormGroup({
      Email: new FormControl('',Validators.required),
      Password:  new FormControl('',
      [Validators.required,Validators.minLength(6),Validators.maxLength(9)]),
      ConfirmPassword:  new FormControl('',Validators.required)
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g:FormGroup){
    return g.get('Password').value === g.get('ConfirmPassword').value ? null : {'mismatch':true}
  }

  register(){

    console.log(this.model);
   this.authService.register(this.model).subscribe(()=> {
    this.router.navigate(['/product']);
     }, error =>{
    this.router.navigate(['/register'])
   });
 }

 cancel(){
   this.cancelRegister.emit(false);
 }

}
