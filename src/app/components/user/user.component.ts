import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { User } from '../service/data.interface';  

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() sectionName!: string;
  @Input() tasks: User[] = [];
  @Input() createdUser: User | null = null;  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.tasks = data[this.sectionName].map((task: User) => ({ ...task, selected: false }));
    });
  }
}
