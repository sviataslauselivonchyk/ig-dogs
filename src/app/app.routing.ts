import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DogModule } from './dog/dog.module';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', loadChildren: () => DogModule},
      {path: '**', redirectTo: '/'},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {
}
