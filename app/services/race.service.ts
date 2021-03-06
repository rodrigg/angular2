import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Race } from '../pojo/race';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  getRaces() {
    return this.http.get('app/json/races.json')
          .map(response => <Race[]>response.json().racesData);
  }
}
