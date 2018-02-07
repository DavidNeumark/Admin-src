import { Component, OnInit } from '@angular/core';
import { Customer } from '../../common/Customer';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent {

  public _customers: Customer[] = [ ];

  public customerToGet: Customer = new Customer();

  constructor(private myWeb: RestService) { this.listOfCustomers(); }


  getCustomer() {
    this.myWeb.getCustomer(this.customerToGet.id).subscribe(
      (response) => {
          // console.log(response);
      }
    );
    this.customerToGet = new Customer();
  }

public listOfCustomers() {
  const self = this;
  this.myWeb.getAllCustomers().subscribe(

  function(customers)
  {
    if (self._customers.length === 0) {

      for (const c of customers)
    {
      self._customers.push(c);
    }
    }

    // console.log(self._customers);
    }

    );
}

setCustomer(customer: Customer) {
  this.customerToGet = customer;
}


}
