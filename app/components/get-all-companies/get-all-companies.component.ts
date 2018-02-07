import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Company } from '../../common/Company';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  public _companies: Company[] = [ ];

  public companyToDelete: Company = new Company();

  constructor(private myWeb: RestService) { }

  public newCompany: Company = new Company();

  ngOnInit() { this.buttonClicked()
  }

  buttonClicked()  {
      const self = this;
  this.myWeb.getAllCompanies().subscribe(

  (companies) => {
      self._companies = companies;
  });

  }

deleteFieldValue(myIndex: number) {
  const c = confirm('Are you sure you want to delete ' + this._companies[myIndex].compName + '?');
    if (c) {
  console.log(this._companies[myIndex]);
  this.deleteCompany(this._companies[myIndex]);
  this._companies.splice(myIndex, 1);
    } else {
      alert('The Company was not deleted!');
    }
}


deleteCompany(company: Company) {

    this.myWeb.deleteCompany(company).subscribe(
      (response) => {
          console.log(response);
      }
    );
  }

}
