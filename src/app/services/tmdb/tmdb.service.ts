import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../configService/config.service';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  readonly apiKey: string = this.config.get('apiKey');

  readonly baseUrl: string = 'https://api.themoviedb.org/3/';

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  getMovieGenres(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.baseUrl}genre/movie/list`, { params });
  }

  getMoviesThisWeek(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.baseUrl}movie/now_playing`, { params });
  }

  getMovieDetails(movieId: number): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.baseUrl}movie/${movieId}`, { params });
  }

}
