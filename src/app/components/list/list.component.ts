import { Component, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Country, User, Payment } from '../service/data.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() sectionName!: string;
  @Input() tasks: (Country | User | Payment)[] = [];
  @Input() dataUser: { [key: string]: User[] } = {};  
  @Input()  dataCountries: { [key: string]: Country[] } = {};  
  @Input()  dataPayment: { [key: string]: Payment[] } = {};  


  constructor(private dataService: DataService) { }

  getTaskLabel(task: any): string {
    if ('name' in task) {
      return task.name;
    } else if ('firstName' in task && 'lastName' in task) {
      return `${task.firstName} ${task.lastName}`;
    } else if ('status' in task) {
      return task.status;
    }
    return '';
  }
}
