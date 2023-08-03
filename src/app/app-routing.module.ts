import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'countries', component: CountriesComponent },  
  { path: 'payments', component: PaymentComponent }, 
  { path: 'users', component: UserComponent },
  { path: 'home', component: HomeComponent }, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { Routes };

