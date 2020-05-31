import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/common/fund';
import { ActivatedRoute } from '@angular/router';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {

  funds : Fund[];
  clientId: number;
  investorId: number;

  constructor(private investorService : FundService,
              private route: ActivatedRoute ) { }

    ngOnInit(): void {
      this.clientId = +this.route.snapshot.queryParamMap.get('clientId');
      this.investorId = +this.route.snapshot.queryParamMap.get('investorId');

      this.listFunds();
    }
   
    listFunds(){
      this.investorService.getinvestorsList(this.investorId).subscribe(
        data => {
          this.funds = data;
        }
      );
    }

}
