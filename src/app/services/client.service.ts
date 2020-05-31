import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../common/client';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/clients';

  constructor(private httpClient: HttpClient) {
  }

  getClient(clientId: number) : Observable<Client>{
    return this.httpClient.get<Client>(this.baseUrl + "/" + clientId);
  }

  getClientList(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.baseUrl);
  }

  saveClient(client: Client): void{

    this.httpClient.post(this.baseUrl, client).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  } 
  
}

