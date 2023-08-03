import { Component, OnInit } from '@angular/core';
import { DataService } from './components/service/data.service';
import { Country, User, Payment } from './components/service/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sections: string[] = ['countries', 'payments', 'users'];
  sectionName!: string;
  tasks: User[] = [];
  createdUser: User | null = null;
  dataUser: { [key: string]: User[] } = {};  
  dataCountries: { [key: string]: Country[] } = {};  
  dataPayment: { [key: string]: Payment[] } = {};  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.dataUser = data.users;
      this.dataCountries = data.countries;
      this.dataPayment = data.payments;
    });
  }
}
