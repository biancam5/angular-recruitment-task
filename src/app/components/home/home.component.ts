import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Country, Payment, User } from '../service/data.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog/dialog-content.component';
import { PaymentDialogComponent } from '../dialog/payment-dialog.component';
import { CountryDialogComponent } from '../dialog/country-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sectionName!: string;
  tasks: User[] = [];
  createdUser: User | null = null;  
  createdPayment: Payment | null = null;  
  createdCountry: Country | null = null;  

  @Input() dataUser: { [key: string]: User[] } = {};
  @Input() dataCountries: { [key: string]: Country[] } = {};
  @Input() dataPayment: { [key: string]: Payment[] } = {};
  dialogRef: MatDialogRef<any> | undefined;


  newUser: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: '',
    selected: false
  };
  newPayment: Payment = {
    id: '',
    status: '',
    receiver: '',
    internalFieldA: '',
    xYZRandomField: '',
    selected: false
  };
  newCountry: Country = {
    id: '',
    name: '',
    flag: '',
    code: '',
    someWeirdServerFieldNameWithCount: 0,
    selected: false
  };
  userCreated: boolean = false;
  paymentCreated: boolean = false;
  countryCreated: boolean = false;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.tasks = data[this.sectionName].map((task: User) => ({ ...task, selected: false }));
    });
  }

  createUser(): void {
   this.dataService.addTask('users', this.newUser);
   this.createdUser = { ...this.newUser }; 
   this.dialogRef = this.dialog.open(DialogContentComponent, {
    width: '600px',
    data: this.createdUser
  });
    this.newUser = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      avatarUrl: '',
      selected: false
    };
    this.userCreated = true;
    setTimeout(() => {
      this.userCreated = false;
    }, 3500);
  }
  createPayment(): void {
    this.dataService.addTask('payments', this.newPayment);
     this.dialogRef = this.dialog.open(PaymentDialogComponent, {
      width: '600px',
      data: this.newPayment
    });
    this.newPayment = {
      id: '',
      status: '',
      receiver: '',
      internalFieldA: '',
      xYZRandomField: '',
      selected: false
    };
    this.paymentCreated = true;
    setTimeout(() => {
      this.paymentCreated = false;
    }, 3500);
  }
  
  createCountry(): void {
    this.dataService.addTask('countries', this.newCountry);
     this.dialogRef = this.dialog.open(CountryDialogComponent, {
      width: '600px',
      data: this.newCountry
    });
    this.newCountry = {
      id: '',
      name: '',
      flag: '',
      code: '',
      someWeirdServerFieldNameWithCount: 0,
      selected: false 
    };
    this.countryCreated = true;
    setTimeout(() => {
      this.countryCreated = false;
    }, 3500);
  }
  
  
}
