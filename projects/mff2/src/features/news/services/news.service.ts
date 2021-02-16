import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../store/reducer';
import {Observable} from 'rxjs';
import {News} from '../model/news.interface';
import {selectNews, selectNewsDetail} from '../store/selectors';
import {requestNewsDetail} from '../store/actions';

@Injectable()
export class NewsService {

  constructor(private readonly store: Store<State>) { }

  getNews(): Observable<News[]> {
    return this.store.select(selectNews);
  }

  getNewsDetail(): Observable<News> {
    return this.store.select(selectNewsDetail);
  }

  requestNewsDetail(id: string): void {
    this.store.dispatch(requestNewsDetail({id}));
  }

}
