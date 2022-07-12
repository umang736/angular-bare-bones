import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  moviesYear: number = 1900;
  movies: Movie[] = [];
  loading: boolean = false;
  errorMessage: string | undefined;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.getMoviesData(2015);
  }

  public getMoviesData() {
    this.loading = true;
    this.errorMessage = "";
    this.dataService.getMoviesData(this.moviesYear)
      .subscribe({
        next: (responseJson) => {                           //next() callback
          console.log('responseJson received')
          this.movies = responseJson.data; 
        },
        error: (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          // this.loading = false;
        },
        complete: () => {                                   //complete() callback
          console.error('Request completed')      
          this.loading = false; 
        }
      })
  }

}
