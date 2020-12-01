import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'piazza-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input()
  heading: string;
  @Input()
  flag: string;

  constructor() {}
  counts = Array(7)
    .fill(1)
    .map((x, i) => i + 1);
  ngOnInit(): void {}
}
