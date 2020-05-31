import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investor } from '../common/investor';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  private baseUrl = 'http://localhost:8080/investors/search?clientId=';

  constructor(private httpClient: HttpClient) { }

  getinvestorsList(clientId: number): Observable<Investor[]>{
    return this.httpClient.get<Investor[]>(this.baseUrl + clientId);
  }
}
