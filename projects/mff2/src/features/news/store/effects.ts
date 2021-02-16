import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {NewsHttpService} from '../http-services/news.http-service';
import {
  requestNews,
  requestNewsDetail,
  requestNewsDetailFailed,
  requestNewsDetailSuccess,
  requestNewsFailed,
  requestNewsSuccess
} from './actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class Effects implements OnInitEffects {

  constructor(private readonly actions$: Actions,
              private readonly newsHttpService: NewsHttpService) {
  }

  requestNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestNews),
      switchMap(() => this.newsHttpService.getNews().pipe(
        map(news => requestNewsSuccess({news})),
        catchError(error => of(requestNewsFailed({error}))),
      ))
    )
  );

  requestNewsDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestNewsDetail),
      switchMap(({id}) => this.newsHttpService.getNewsDetail(id).pipe(
        map(news => requestNewsDetailSuccess({news})),
        catchError(error => of(requestNewsDetailFailed({error}))),
      ))
    )
  );

  ngrxOnInitEffects(): Action {
    return requestNews();
  }

}
