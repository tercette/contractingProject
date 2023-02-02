import { LoginService } from './../../../services/loginservice';
import { LoginModel } from './../../../models/LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    public LoginService : LoginService
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
    this.LoginService.LoginUsuario(dadosLogin).subscribe( token => {
      const loginToken = token
      console.log('login token=> ',loginToken)
    })
  }

}
