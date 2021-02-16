import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NewsComponent} from './components/news/news.component';
import {NewsDetailComponent} from './components/news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewsComponent
  },
  {
    path: ':newsId/detail',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {
}
