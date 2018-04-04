import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DogHomePageComponent } from './dog-home-page.component';

describe('DogHomePageComponent', () => {
  let component: DogHomePageComponent;
  let fixture: ComponentFixture<DogHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogHomePageComponent ],
      imports: [ RouterTestingModule ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
