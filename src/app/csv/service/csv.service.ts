import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  constructor() {}

  // Dummy data, replace with actual CSV operations
  readCsvFile(file: File): Observable<any[]> {
    // Implement CSV reading logic here
    return of([]);
  }

  appendToCsv(data: any): Observable<any> {
    // Implement CSV appending logic here
    return of({});
  }
}
