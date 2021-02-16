import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {MonoTypeOperatorFunction, Observable} from 'rxjs';
import {News} from '../../model/news.interface';
import {filter, first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

export function truthy<T>(): MonoTypeOperatorFunction<T> {
  return filter(value => !!value);
}

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
})
export class NewsDetailComponent implements OnInit {

  news$: Observable<News> = this.newsService.getNewsDetail().pipe(truthy());

  constructor(private readonly newsService: NewsService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const result = await this.activatedRoute.params.pipe(first()).toPromise();
    this.newsService.requestNewsDetail(result.newsId);
  }

  onBreadcrumbClicked() {
    this.router.navigate(['news']);
  }

}
