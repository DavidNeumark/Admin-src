import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Customer } from '../../common/Customer';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public _customers: Customer[] = [ ];

  public customerToDelete: Customer = new Customer();

  constructor(private myWeb: RestService) { }

  public newCustomer: Customer = new Customer();

  ngOnInit() { this.buttonClickedCustomer(); }

  buttonClickedCustomer()  {
        const self = this;
      this.myWeb.getAllCustomers().subscribe(

          (customers) => {
          // for(let c of customers)
          // {
          //   console.log(c)
          // }
          self._customers = customers;
          console.log(self._customers);
          }

      );

  }

  deleteFieldValue(customer: Customer) {

    const c = confirm('Are you sure you want to delete ' + customer.custName + '?');
    if (c) {
    this.myWeb.deleteCustomer(customer).subscribe(
      // (response) => {
      //     console.log(response);
      // },
      () => {
        alert('The Customer was not deleted!');
      }
    );

   // tslint:disable-next-line:prefer-const
   let updatedCustomers: Customer[] = new Array;
    // tslint:disable-next-line:no-shadowed-variable
    for (const c of this._customers) {
      if (c !== customer) {
        updatedCustomers.push(c);
      }
    }
    console.log(updatedCustomers);
    this._customers = updatedCustomers;
  } else {
    alert(customer.custName + ' was not deleted');
  }

}


}
