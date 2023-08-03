import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from '../service/data.interface';

@Component({
  selector: 'app-country-dialog',
  templateUrl: './country-dialog.component.html',
  styleUrls: ['./country-dialog-content.component.css']
})
export class CountryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dataCountry: Country) {}
}

