import {createAction, props} from '@ngrx/store';
import {News} from '../model/news.interface';

export const requestNews = createAction('[NEWS] request news');

export const requestNewsSuccess = createAction(
  '[NEWS] request news success',
  props<{ news: News[] }>()
);

export const requestNewsFailed = createAction(
  '[NEWS] request news failed',
  props<{ error: any }>()
);

export const requestNewsDetail = createAction(
  '[NEWS] request news detail',
  props<{ id: string }>()
);

export const requestNewsDetailSuccess = createAction(
  '[NEWS] request news detail success',
  props<{ news: News }>()
);

export const requestNewsDetailFailed = createAction(
  '[NEWS] request news detail failed',
  props<{ error: any }>()
);
