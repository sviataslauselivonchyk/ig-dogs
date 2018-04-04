import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DogPageComponent,
  DogEditPageComponent,
  DogHomePageComponent,
  DogListPageComponent,
  DogNewPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: DogPageComponent,
    children: [
      {
        path: '',
        component: DogHomePageComponent,
      },
      {
        path: 'dogs',
        component: DogListPageComponent,
      },
      {
        path: 'dogs/new',
        component: DogNewPageComponent,
      },
      {
        path: 'dogs/edit/:id',
        component: DogEditPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DogRouting {
}
