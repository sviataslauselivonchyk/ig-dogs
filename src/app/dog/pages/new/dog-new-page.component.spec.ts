import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DogNewPageComponent } from './dog-new-page.component';
import { DogService } from '../../services';

describe('DogNewPageComponent', () => {
  let component: DogNewPageComponent;
  let fixture: ComponentFixture<DogNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogNewPageComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ DogService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
