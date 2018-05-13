import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetDataService {
  constructor(private http: HttpClient) { }
  public getList(): Observable<any> {
    return this.http.get('https://api.github.com/users');
}

  public getAllDetails(): Observable<any> {
    return this.http.get('https://api.github.com/users');
  }
}
