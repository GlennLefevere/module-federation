import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {News} from '../../model/news.interface';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styles: [
  "p.news-content {   display: block;\n" +
  "  height: 67.2px;\n" +
  "  margin: 0 auto;\n" +
  "  font-size: 1rem;\n" +
  "  line-height: 1.4;\n" +
  "  text-overflow: ellipsis;\n" +
  "  overflow: hidden;\n}"]
})
export class NewsItemComponent {

  @Input() news: News;

  @Input() full: boolean = false;

  @Output() newsClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly sanitizer: DomSanitizer) { }

  getSanitizedImageSrc() {
    return this.sanitizer.bypassSecurityTrustUrl(this.news.imageSrc);
  }

  onMoreClicked(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.newsClicked.emit(this.news.id);
  }

}
