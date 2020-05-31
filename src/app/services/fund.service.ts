import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from '../common/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  private baseUrl = 'http://localhost:8080/funds/search?investorId=';

  constructor(private httpClient: HttpClient) { }

  getinvestorsList(investorId: number): Observable<Fund[]>{
    return this.httpClient.get<Fund[]>(this.baseUrl + investorId);
  }

}
