import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dog-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Output() public customClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onClicked(event: Event): void {
    this.customClick.emit(event);
  }
}
