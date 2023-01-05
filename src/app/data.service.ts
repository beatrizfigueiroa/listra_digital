import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(
      'https://run.mocky.io/v3/24fda311-d8b1-49ca-b35d-74ea1949020d'
    );
  }
}
