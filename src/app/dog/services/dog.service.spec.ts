import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DogService } from './dog.service';

describe('DogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DogService ],
      imports: [ HttpClientModule ],
    });
  });

  it('should be created', inject([DogService], (service: DogService) => {
    expect(service).toBeTruthy();
  }));
});
