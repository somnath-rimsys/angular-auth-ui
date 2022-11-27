import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface register {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  createUser(data: register) {
    const url = 'http://localhost:8000/api/v1/auth/register'
    return this.http.post(url, data)
  }
}
