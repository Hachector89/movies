import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'config.json';
  private config: any;

  constructor(private http: HttpClient) { }

  load(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  get(key: string): any {
    return this.config[key];
  }
}
