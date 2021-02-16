import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './reducer';

const selectState = createFeatureSelector<State>('news');

export const selectNews = createSelector(selectState, (state: State) => state.news);

export const selectNewsDetail = createSelector(selectState, (state: State) => state.newsDetail);
