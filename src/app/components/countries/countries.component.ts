import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Country } from '../service/data.interface';  

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() sectionName!: string;
  @Input() tasks: Country[] = []; 
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.tasks = data[this.sectionName].map((task: Country) => ({ ...task, selected: false }));
    });
  }
  }
  
