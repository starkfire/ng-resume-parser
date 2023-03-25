import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TextService {

  API_URL = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient
  ) { }

  parse(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/text/parse`, data, { observe: 'response' })
  }

}
