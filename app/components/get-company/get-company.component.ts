import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Company } from '../../common/Company';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent {
  statusmessage: string;

  public _companies: Company[] = [ ];

  public companyToGet: Company = new Company();

  constructor(private myWeb: RestService) { this.listOfCompanies(); }

  getCompany() {
    this.myWeb.getCompany(this.companyToGet.id).subscribe(
      (response) => {
          // console.log(response);
      }
    ),
    // (error: Response) => {
    //   if (error.status === 500){
    //     this.statusmessage="No company for this id ";
    //   }
    // };
    this.companyToGet = new Company();
  }

public listOfCompanies()
{
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

    )
}

setCompany(company: Company) {
  this.companyToGet = company;
}


}
