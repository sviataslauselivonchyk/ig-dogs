import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IDog } from '../../models';

@Component({
  selector: 'dog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input() public dogs: IDog[];
  @Output() public editDog: EventEmitter<number | string> = new EventEmitter<number | string>();
  @Output() public deleteDog: EventEmitter<number | string> = new EventEmitter<number | string>();

  constructor() {
  }

  public onEditDog(id: number | string): void {
    this.editDog.emit(id);
  }

  public onDeleteDog(id: number | string): void {
    this.deleteDog.emit(id);
  }

}
