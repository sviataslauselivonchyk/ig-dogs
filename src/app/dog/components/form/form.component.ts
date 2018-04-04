import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IDog } from '../../models';

export interface IRace {
  key: string;
  value: string;
}

export enum DogRaces {
  Beagle = 'Beagle',
  Chow_Chow = 'Chow Chow',
  German_Shepherd_Dog = 'German Shepherd Dog',
  Saint_Bernard = 'Saint Bernard',
  Siberian_Husky = 'Siberian Husky',
}

@Component({
  selector: 'dog-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() public dogModel: IDog;
  @Output() public customSubmit: EventEmitter<IDog> = new EventEmitter<IDog>();

  public dogForm: FormGroup;
  public races: IRace[] = [
    {key: 'Beagle', value: 'Beagle'},
    {key: 'Chow_Chow', value: 'Chow Chow'},
    {key: 'German_Shepherd_Dog', value: 'German Shepherd Dog'},
    {key: 'Saint_Bernard', value: 'Saint Bernard'},
    {key: 'Siberian_Husky', value: 'Siberian Husky'},
  ];

  constructor(public fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.dogForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
      race: ['', Validators.required]
    });
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (this.dogForm && changes.dogModel) {
      this.dogForm.setValue({
        name: changes.dogModel.currentValue.name,
        age: changes.dogModel.currentValue.age,
        race: changes.dogModel.currentValue.race,
      });
    }
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    if (this.dogForm.status === 'VALID') {
      this.customSubmit.emit(this.dogForm.value);
    }
  }

}
