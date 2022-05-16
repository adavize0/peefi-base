import { Component,  ElementRef, ViewChild } from '@angular/core';
import { SearchSectionComponent } from './components/search-section/search-section.component';


@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('searchSection') searchSection: ElementRef | undefined;
  scrollToSearch(): void {
    if(!this.searchSection){
      console.error("Cannot scrollTo searchSection, ElementRef is undefined")
      return
    }
    const el = this.searchSection as unknown as SearchSectionComponent
    el.focus()
  }
}
