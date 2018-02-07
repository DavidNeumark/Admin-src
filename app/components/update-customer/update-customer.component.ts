import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Customer } from '../../common/Customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customerToUpdate: Customer = new Customer();

  public _customers: Customer[] = [ ];

  constructor(private myWeb: RestService) { this.listOfCustomers(); }

  ngOnInit() {
  }

  updateCustomer()
  {
    this.myWeb.updateCustomer(this.customerToUpdate).subscribe(
      function(response)
      {
          console.log(response);
      }
    );
    this.customerToUpdate = new Customer();
  }

  public listOfCustomers() {
    const self = this;
    this.myWeb.getAllCustomers().subscribe(

    (customers) => {
      if (self._customers.length === 0) {

        for (const c of customers) {
        self._customers.push(c);
      }
      }

      // console.log(self._customers);
      }

      );
  }

  setCustomer(customer: Customer) {
  this.customerToUpdate = customer;
}

}
