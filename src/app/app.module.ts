import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { InvestorListComponent } from './components/investor-list/investor-list.component';
import { FundListComponent } from './components/fund-list/fund-list.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'client-edit/:clientId', component: ClientEditComponent},
  {path: 'investors/search', component: InvestorListComponent},
  {path: 'funds/search', component: FundListComponent},
  {path: '', component: ClientListComponent, pathMatch: 'full'},
  {path: '*', component: ClientListComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    InvestorListComponent,
    FundListComponent,
    ClientEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
