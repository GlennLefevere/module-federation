import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../model/news.interface';
import {environment} from '../../../environments/environment';
import {NewsHttpServiceMock} from './news.http-service.mock';

export interface NewsHttpServiceDefinition {
  getNews: () => Observable<News[]>;

  getNewsDetail: (id: string) => Observable<News>;
}

@Injectable({
  providedIn: 'root',
  useClass: !environment.production ? NewsHttpServiceMock : NewsHttpService
})
export class NewsHttpService implements NewsHttpServiceDefinition{

  constructor(private readonly http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>('/news');
  }

  getNewsDetail(id: string): Observable<News> {
    return this.http.get<News>(`/news/${id}`);
  }
}
