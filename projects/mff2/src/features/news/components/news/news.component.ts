import {Component} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {Observable} from 'rxjs';
import {News} from '../../model/news.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  /*styleUrls: ['./news.component.scss']*/
})
export class NewsComponent {

  news$: Observable<News[]> = this.newsService.getNews();

  constructor(private readonly newsService: NewsService,
              private readonly router: Router) {
  }

  async onNewsItemClicked(event: string) {
    await this.router.navigate(['news', event, 'detail']);
  }

}
