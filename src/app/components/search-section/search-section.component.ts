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
  isSubmitting: boolean = false;
  searchString: string = '';

  constructor(
    private _element: ElementRef,
    private searchService: SearchService
  ) {
    this.searchService.isAsking$.subscribe((val) => {
      this.isSubmitting = val;
    });
  }

  onSearchFormSubmit(formValues: { searchInput: string }) {
    if (this.isSubmitting) return;
    this.searchService.search(formValues.searchInput);
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
