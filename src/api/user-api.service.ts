import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export interface Usuario {
  user: string
  password: string
  email: string
}

export interface SaveUserResponse{
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  httpClient = inject(HttpClient)

  getListUser(){
    return lastValueFrom(this.httpClient.get<Usuario[]>('http://localhost:8080/user/'))
  }

  saveUser(usuario: Usuario){
    return lastValueFrom(this.httpClient.post<SaveUserResponse>('http://localhost:8080/user/', usuario))
  }

}
