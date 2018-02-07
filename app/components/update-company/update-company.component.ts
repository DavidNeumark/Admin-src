import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Company } from '../../common/Company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public newCompany: Company = new Company();

  public _companies: Company[] = [ ];

  constructor(private myWeb: RestService) { this.listOfCompanies();  }

  ngOnInit() {
  }
  updateCompany() {
    this.myWeb.updateCompany(this.newCompany).subscribe(
      (response) => {
          // console.log(response);
      }
    );
    this.newCompany = new Company();
  }

  public listOfCompanies() {
    const self = this;
    this.myWeb.getAllCompanies().subscribe(

    (companies) => {
      if (self._companies.length === 0) {
        for (const c of companies) {
        self._companies.push(c);
      }
      }
      // console.log(self._companies);
      }

      );
  }

  setCompany(company: Company) {
  this.newCompany = company;
}

}
