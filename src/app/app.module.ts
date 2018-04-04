import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DogModule } from './dog/dog.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DogModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
