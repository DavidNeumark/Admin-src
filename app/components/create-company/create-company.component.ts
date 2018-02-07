import { Component, OnInit } from '@angular/core';
import { Company } from '../../common/Company';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {

  public _companies: Company[] = [ ];
  constructor(private myWeb: RestService) { }
  public newCompany: Company = new Company();

  createCompany() {
    this.myWeb.createCompany(this.newCompany).subscribe(
      (response) => {
          console.log(response);
      }
    );
    this.newCompany = new Company();
  }



}
