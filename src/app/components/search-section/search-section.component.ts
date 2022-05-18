import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSectionComponent {
  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  isSubmitting: boolean = true;

  constructor(
    private _element: ElementRef,
    private searchService: SearchService
  ) {
    this.searchService.isAsking$.subscribe((val) => {
      this.isSubmitting = val;
    });
  }

  onSearchFormSubmit(event: SubmitEvent) {
    event.preventDefault()
    if (this.isSubmitting || this.searchInput?.nativeElement.value === "") return;
    this.searchService.search(this.searchInput?.nativeElement.value);
  }

  focus() {
    if (!this.searchInput) {
      console.error('Search input element not found');
    }

    const el = this._element.nativeElement as HTMLElement;

    el.scrollIntoView({
      block: 'start',
      inline: 'start',
    });
    this.searchInput?.nativeElement.focus({ preventScroll: true });
  }
}
