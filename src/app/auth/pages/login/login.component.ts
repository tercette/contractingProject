import { LoginService } from './../../../services/loginservice';
import { LoginModel } from './../../../models/LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
showErrorMessage = false

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    public LoginService : LoginService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      //email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submitLogin() {
    const dadosLogin = this.loginForm.getRawValue() as LoginModel;
    console.log('Dados login => ',dadosLogin)
    this.LoginService.LoginUsuario(dadosLogin)
    .subscribe(
      token => {
        if(token){
          this.authService.SetToken(JSON.stringify(token))
          this.router.navigate(["/news"]);
          console.log('login token=> ', token)
          return
        }
    }, error => {
      console.log("login failed")
      this.showErrorMessage = true
    })
  }

  loginAgain(){
    this.showErrorMessage = false
    this.loginForm.reset()
  }
}
