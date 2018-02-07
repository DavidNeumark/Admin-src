import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Customer } from '../../common/Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private myWeb: RestService) { }

  public newCustomer: Customer = new Customer();

  ngOnInit() { }
  createCustomer()
  {
    this.myWeb.createCustomer(this.newCustomer).subscribe(
      (response) => {
          console.log(response);
      }
    );
    this.newCustomer = new Customer();
  }
}
