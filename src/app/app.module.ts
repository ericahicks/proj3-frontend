import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    DadJokesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
