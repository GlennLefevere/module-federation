import {News} from '../model/news.interface';
import {Action, combineReducers, createReducer, on} from '@ngrx/store';
import {requestNews, requestNewsDetailSuccess, requestNewsFailed, requestNewsSuccess} from './actions';

export interface State {
  news: News[];
  newsDetail: News;
}

export const initialState: State = {
  news: [],
  newsDetail: undefined
}


const _reducer = combineReducers(
  {
    news: newsReducer(initialState.news),
    newsDetail: newsDetailReducer(initialState.newsDetail),
  },
  initialState
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}


function newsReducer(initialNewsState: News[]) {
  return createReducer(
    initialNewsState,
    on(
      requestNews,
      requestNewsFailed,
      () => []
    ),
    on(requestNewsSuccess, (_, {news}) => news)
  )
}

function newsDetailReducer(initialNewsDetailState: News) {
  return createReducer(
    initialNewsDetailState,
    on(requestNewsDetailSuccess, (_, {news}) => news)
  )
}
