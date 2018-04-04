import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDog } from '../../models';
import { DogService } from '../../services';

@Component({
  selector: 'dog-new-page',
  templateUrl: './dog-new-page.component.html',
  styleUrls: ['./dog-new-page.component.css']
})
export class DogNewPageComponent implements OnInit {

  constructor(public router: Router, public dogService: DogService) {
  }

  public ngOnInit(): void {
  }

  public onSubmit(data: IDog): void {
    this.dogService.createDog(data).subscribe(
      result => {
        this.router.navigate(['/dogs']);
      }
    );
  }
}
