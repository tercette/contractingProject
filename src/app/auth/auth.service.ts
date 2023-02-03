import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
  {providedIn: 'root'}
)

export class AuthService {
  private data = new BehaviorSubject<any>(null);
  currentData:any = this.data.asObservable();

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

  updateData(data: any) {
    this.data.next(data);
  }
}
