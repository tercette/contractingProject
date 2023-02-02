
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) {

  }

  private readonly baseURL = environment["endpoint"];

LoginUsuario(object:any){
  return this.httpClient.post<any>(`${this.baseURL}/signin`, object);   //https://localhost:7231/Login/signin
}
}
