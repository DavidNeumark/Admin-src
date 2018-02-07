import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Customer } from '../common/Customer';
import { Company } from '../common/Company';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(private _http: Http) { }


public getAllCompanies() {
 const promise =  this._http.get('./getAllCompanies/').map(
(companiesResponse) => {
  return companiesResponse.json();
}

  );
  return promise;
}

public getAllCustomers() {
 const promise =  this._http.get('./getAllCustomers').map(
   (customersResponse) => {
  return customersResponse.json();
}

  );
  return promise;
}

public createCompany(c: Company) {

  return this._http.post('./createCompany/', c);
}

public createCustomer(c: Customer) {
  return this._http.post('./createCustomer/', c);
}

public updateCompany(c: Company)
{
  return this._http.put('./updateCompany', c);
}

public updateCustomer(c: Customer) {

  return this._http.put('./updateCustomer/', c);
}

public deleteCompany(c: Company) {

  return this._http.delete('./deleteCompany/' , {body: c});

}

public deleteCustomer(c: Customer) {
  console.log(c);
  return this._http.delete('./deleteCustomer/' , {body: c});
}

public getCompany(id: number)
{
  const promise =  this._http.get('/getCompany/' + id)
  .map(
(companiesResponse) => {
  return companiesResponse.json();
}

  ).catch( e => {
    return Observable.throw(e);
  });
  return promise;

}

public getCustomer(id: number) {const promise =  this._http.get('/getCustomer/' + id)
.map(
function (companiesResponse) {
return companiesResponse.json();
}

);
return promise;

}

}
