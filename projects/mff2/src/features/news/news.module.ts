import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './components/news/news.component';
import {NewsItemComponent} from './components/news-item/news-item.component';
import {NewsDetailComponent} from './components/news-detail/news-detail.component';
import {NewsRoutingModule} from './news-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {Effects} from './store/effects';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './store/reducer';
import {StoreModule} from '@ngrx/store';
import {NewsService} from './services/news.service';

@NgModule({
  declarations: [NewsComponent, NewsItemComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsRoutingModule,
    StoreModule.forFeature('news', reducer),
    EffectsModule.forFeature([Effects]),
  ],
  providers: [
    NewsService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsModule {
}
