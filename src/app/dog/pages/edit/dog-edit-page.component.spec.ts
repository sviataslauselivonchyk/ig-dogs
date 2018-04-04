import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { DogEditPageComponent } from './dog-edit-page.component';
import { DogService } from '../../services';

describe('DogEditPageComponent', () => {
  let component: DogEditPageComponent;
  let fixture: ComponentFixture<DogEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogEditPageComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ DogService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
