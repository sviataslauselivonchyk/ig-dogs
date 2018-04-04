import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DogService } from '../../services';
import { IDog } from '../../models';

@Component({
  selector: 'dog-edit-page',
  templateUrl: './dog-edit-page.component.html',
  styleUrls: ['./dog-edit-page.component.css']
})
export class DogEditPageComponent implements OnInit {

  public dogId: string;
  public dog: IDog;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public dogService: DogService) {
  }

  public ngOnInit(): void {
    this.route
      .params
      .subscribe(
        param => {
          this.dogId = param.id;
          if (this.dogId) {
            this.getDogById(this.dogId);
          } else {
            this.router.navigate(['/dogs']);
          }
        }
      );
  }

  public getDogById(id: string): void {
    this.dogService
      .getDogById(id)
      .subscribe(
        result => {
          this.dog = result;
        }
      );
  }

  onSubmit(dog: IDog) {
    this.dogService
      .editDog(this.dogId, dog)
      .subscribe(
        result => {
          this.router.navigate(['/dogs']);
        }
      );
  }
}
