export * from './dog-page.component';
export * from './edit/dog-edit-page.component';
export * from './home/dog-home-page.component';
export * from './list/dog-list-page.component';
export * from './new/dog-new-page.component';

import { DogPageComponent } from './dog-page.component';
import { DogEditPageComponent } from './edit/dog-edit-page.component';
import { DogHomePageComponent } from './home/dog-home-page.component';
import { DogListPageComponent } from './list/dog-list-page.component';
import { DogNewPageComponent } from './new/dog-new-page.component';

export const DOG_PAGE_COMPONENTS = [
  DogPageComponent,
  DogEditPageComponent,
  DogHomePageComponent,
  DogListPageComponent,
  DogNewPageComponent,
];
