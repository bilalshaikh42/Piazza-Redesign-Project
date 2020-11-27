import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'piazza-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postName;
  className;
  constructor(private params: ActivatedRoute) {}

  ngOnInit(): void {
    this.className = this.params.url.pipe(map((url) => url.toString()));
    this.postName = this.params.paramMap.pipe(
      map((paramMap) => paramMap.get('post'))
    );
  }
}
