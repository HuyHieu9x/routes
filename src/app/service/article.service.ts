import { Injectable } from '@angular/core';
import { find, from, map, Observable, of, shareReplay } from 'rxjs';
import { Article } from '../module/article';

const articles = [
  {title: 'title 01',body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat non velit at cursus. Sed eu gravida arcu',slug : 'bai-viet-1'},
  {title: 'title 02',body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat non velit at cursus. Sed eu gravida arcu',slug : 'bai-viet-2'},
  {title: 'title 03',body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat non velit at cursus. Sed eu gravida arcu',slug : 'bai-viet-3'},
];

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor() { }

  get article$(){
      return of<Article[]>(articles).pipe(shareReplay(1));
  }

  getArticleBySlug(slug:any): Observable<Article | null  | undefined>{
    return from(articles).pipe(
      find((item) => item.slug === slug)
    );
  }
  
  
}
