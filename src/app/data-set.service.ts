import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSetService {
  private apiUrl = 'YOUR_API_URL'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getDataSets(): Observable<any> {
    const endpoint = `${this.apiUrl}/data-sets`; // Replace with your API endpoint for fetching data sets
    return this.http.get(endpoint);
  }

  // Add methods to fetch data set properties, child nodes, etc. as needed
}
