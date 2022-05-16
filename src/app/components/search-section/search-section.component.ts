import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent {
  isSubmitting: boolean = false;

  constructor(private searchService: SearchService) {
    this.searchService.isAsking$.subscribe((val) => {
      this.isSubmitting = val;
    });
  }

  onAskClick() {
    if (this.isSubmitting) return;

    this.searchService.search('hi');
  }
}
