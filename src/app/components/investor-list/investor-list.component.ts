import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Investor } from 'src/app/common/investor';
import { InvestorService } from 'src/app/services/investor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.css']
})
export class InvestorListComponent implements OnInit {

  investors: Investor[];
  clientId: number;

  constructor(private investorService : InvestorService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.clientId = +this.route.snapshot.queryParamMap.get('clientId');

    this.listInvestors();
  }
 
  listInvestors(){
    console.debug("clientId=" + this.clientId);
    this.investorService.getinvestorsList(this.clientId).subscribe(
      data => {
        this.investors = data;
      }
    );
  }

}
