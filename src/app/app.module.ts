import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ResponsesSectionComponent } from './responses-section/responses-section.component';
import { AnimatedUFOComponent } from './animated-ufo/animated-ufo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    ResponsesSectionComponent,
    AnimatedUFOComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
