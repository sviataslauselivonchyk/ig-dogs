import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DogRouting } from './dog.routing';
import { DOG_PAGE_COMPONENTS } from './pages';
import { DOG_COMPONENTS } from './components';
import { DogService } from './services';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DogRouting
  ],
  declarations: [
    ...DOG_PAGE_COMPONENTS,
    ...DOG_COMPONENTS
  ],
  providers: [
    DogService
  ],
})
export class DogModule {
}
