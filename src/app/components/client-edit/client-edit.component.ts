import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/common/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  clientEditFormGroup: FormGroup;
  client: Client;

  constructor(private formbuilder: FormBuilder,
              private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    let clientJson = this.route.snapshot.queryParams.Client
    this.client = JSON.parse(clientJson) as Client;

    this.clientEditFormGroup = this.formbuilder.group({
      client: this.formbuilder.group({
        name:[this.client.name],
        description:[this.client.description]
      })
    });

  }

  onSubmit() {

    let formClient = this.clientEditFormGroup.get("client").value;

    let updatedClient = new Client();
    updatedClient.id = this.client.id;
    updatedClient.name = formClient.name;
    updatedClient.description = formClient.description;

    this.clientService.saveClient(updatedClient);

    this.router.navigate(['']);

  }

}
