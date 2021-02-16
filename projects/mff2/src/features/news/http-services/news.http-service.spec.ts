import { TestBed } from '@angular/core/testing';

import { NewsHttpService } from './news.service';

describe('NewsService', () => {
  let service: NewsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
