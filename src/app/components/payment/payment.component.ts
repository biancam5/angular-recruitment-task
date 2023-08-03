import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { Payment } from '../service/data.interface';  

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() sectionName!: string;
  @Input() tasks: Payment[] = [];   

  constructor(private dataService: DataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.tasks = data[this.sectionName].map((task: Payment) => ({ ...task, selected: false }));
    });
  }

}

