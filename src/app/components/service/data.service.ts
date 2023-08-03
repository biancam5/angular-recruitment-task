import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = './assets/data.json';
  private data: any = {};

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl).pipe(
      tap(data => this.data = data)
    );
  }

  addTask(section: string, task: any): void {
    if (this.data[section]) {
      this.data[section].push(task);
    }
  }

  getUsers(): any[] {
    return this.data['users'] || [];
  }

  getPayments(): any[] {
    return this.data['payments'] || [];
  }

  getCountries(): any[] {
    return this.data['countries'] || [];
  }
}
