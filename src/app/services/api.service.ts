import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

const REQUEST_HEADERS = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${environment.OPENAI_KEY}`,
});

@Injectable({
  providedIn: 'root',
})

export class APIService {
  constructor(private http: HttpClient) {}
  endpoints = {
    QA_curie_001: "https://api.openai.com/v1/engines/text-curie-001/completions",
  }

  postRequest(URL: string, requestBody: any): Observable<any> {
    return this.http.post(
      URL,
      requestBody, {
      headers: REQUEST_HEADERS,
    }).pipe(retry(2))
  }
}
