import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'piazza-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  counts = Array(60)
    .fill(1)
    .map((x, i) => i + 1);
  constructor() {}

  ngOnInit(): void {}
}
