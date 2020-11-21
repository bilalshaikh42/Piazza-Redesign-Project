import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'piazza-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss'],
})
export class CloseButtonComponent implements OnInit {
  constructor() {}
  @Output() buttonClick = new EventEmitter();
  ngOnInit(): void {}
  clickHandler() {
    this.buttonClick.emit();
  }
}
