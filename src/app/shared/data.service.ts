import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  moviesUrl: string = 'https://jsonmock.hackerrank.com/api/movies';
  // moviesUrl: string = 'http://localhost:3000/movies';
  getGraphDataLineSeriesCountUrl: string = 'http://localhost:3000/graph-data/line-series/count';
  
  constructor(private http: HttpClient) { }

  getProjectName() {
    return 'Angular Bare Bones';
  }

  getMoviesData(year: number): Observable<any> {
    const params = new HttpParams()
    .set('Year', year);
    return this.http.get<any>(this.moviesUrl, { 'params': params })
    .pipe(
      map((responseJson) => {
        return responseJson;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      })
    )
  }

  getGraphDataLineSeriesCount(): Observable<any> {
    return this.http.get<any>(this.getGraphDataLineSeriesCountUrl)
    .pipe(
      map((responseJson) => {
        return responseJson;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      })
    )
  }
}
