import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { DogModel } from '../../models';
import { DogService } from '../../services';

@Component({
  selector: 'dog-list-page',
  templateUrl: './dog-list-page.component.html',
  styleUrls: ['./dog-list-page.component.css'],
})
export class DogListPageComponent implements OnInit, OnDestroy {

  public loading: boolean;
  public dogsList: DogModel;
  private subscription$: Subscription;

  constructor(public router: Router, public dogService: DogService) {
  }

  public ngOnInit(): void {
    this.getDogList();
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public getDogList() {
    this.loading = true;
    this.subscription$ = this.dogService
      .getAllDogs()
      .subscribe(
        result => {
          this.dogsList = result;
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
  }

  public onEditDog(id: number | string) {
    this.router.navigate([`/dogs/edit/${id}`]);
  }

  public onDeleteDog(id: number | string) {
    this.dogService.deleteDog(id).subscribe(
      result => {
        this.getDogList();
      }
    );
  }
}
