import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, Payment, Country } from '../service/data.interface'; 

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, 
   ) {}
}

