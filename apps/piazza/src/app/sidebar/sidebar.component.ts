import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';
@Component({
  selector: 'piazza-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  id = null;
  counts = Array(60)
    .fill(1)
    .map((x, i) => i + 1);
  constructor(private params: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openFilters() {
    let dialogRef = this.dialog.open(FilterComponent, {
      height: '274px',
      width: '600px',
    });
  }
}
