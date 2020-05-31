import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/common/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService : ClientService ) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients(){
    this.clientService.getClientList().subscribe(
        data => {
          this.clients = data;
        }
    );
  }

}
