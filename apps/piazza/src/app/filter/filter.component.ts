import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { MatChip, MatChipList } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'piazza-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  chips = [
    { name: 'Principles 1', select: false },
    { name: 'Principles 2', select: false },
    { name: 'Principles 3', select: false },
    { name: 'Principles 4', select: false },
    { name: 'Principles 5', select: false },
    { name: 'Methods 1', select: false },
    { name: 'Methods 2', select: false },
    { name: 'Methods 3', select: false },
    { name: 'Methods 4', select: false },
    { name: 'Methods 5', select: false },
    { name: 'Final Project', select: false },
    { name: 'Exam 1', select: false },
    { name: 'Exam 2', select: false },
  ];

  selected = [];
  constructor(public dialogRef: MatDialogRef<FilterComponent>) {}
  toggleSelect(i) {
    this.chips[i].select = !this.chips[i].select;
  }
  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
}
