import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Payment } from '../service/data.interface'; 


@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class PaymentDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dataPay: Payment) {}
}
