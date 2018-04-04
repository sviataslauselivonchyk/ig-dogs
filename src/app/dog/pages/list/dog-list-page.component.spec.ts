import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { DogListPageComponent } from './dog-list-page.component';
import { DogService } from '../../services';

describe('DogListPageComponent', () => {
  let component: DogListPageComponent;
  let fixture: ComponentFixture<DogListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListPageComponent ],
      providers: [ DogService ],
      imports: [ HttpClientModule, RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
