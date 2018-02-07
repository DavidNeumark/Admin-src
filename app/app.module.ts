import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetCompanyComponent } from './components/get-company/get-company.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestService } from './services/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    GetAllCompaniesComponent,
    GetCompanyComponent,
    UpdateCompanyComponent,
    CreateCompanyComponent,
    GetAllCustomersComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    GetCustomerComponent,
    GetAllCompaniesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([

      {
        path: 'createCustomer',
        component: CreateCustomerComponent
        },

      {
        path: 'getAllCustomers',
        component: GetAllCustomersComponent
        },

      {
        path: 'createCompany',
        component: CreateCompanyComponent
        },

      {
        path: 'getAllCompanies',
        component: GetAllCompaniesComponent
        },

        {
          path: 'getCompany',
          component: GetCompanyComponent
          },

          {
            path: 'getCustomer',
            component: GetCustomerComponent
            },

          {
            path: 'updateCompany',
            component: UpdateCompanyComponent
            },

            {
              path: 'updateCustomer',
              component:UpdateCustomerComponent
              },
      ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
