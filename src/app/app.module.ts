import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
 


import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CountriesComponent } from './components/countries/countries.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { DialogContentComponent } from './components/dialog/dialog-content.component';
import { CountryDialogComponent } from './components/dialog/country-dialog.component';
import { PaymentDialogComponent } from './components/dialog/payment-dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CountriesComponent,
    PaymentComponent,
    UserComponent,
    HomeComponent,
    DialogContentComponent,
    CountryDialogComponent,
    PaymentDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    AppRoutingModule,
    RouterModule 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
