import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProjectName() {
    return 'Angular Bare Bones';
  }
}
