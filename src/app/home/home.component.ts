import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    projectName: string;

    constructor(private dataService: DataService) { 
      this.projectName = '';
    }

    ngOnInit() { 
        this.projectName = this.dataService.getProjectName();
    }

}
