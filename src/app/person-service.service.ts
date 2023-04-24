import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  private personUrl: string;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8080/people';
  }

  public getAgeByName(name: string):Observable<number> {
    return this.http.get<number>(this.personUrl.concat('/getAgeByName/').concat(name));
  }
}
