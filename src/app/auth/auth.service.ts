import { Injectable } from '@angular/core';


@Injectable(
  {providedIn: 'root'}
)

export class AuthService {

  private UserAuthenticated: boolean = false;


  public SetToken( token: string) {
    sessionStorage.setItem('token', token);
  }

  public GetToken() {
    sessionStorage.getItem('token');
  }

  public ClearToken() {
    sessionStorage.removeItem('token');
  }
}
