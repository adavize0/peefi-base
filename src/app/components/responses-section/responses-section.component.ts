import { Component, QueryList, ViewChildren } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ResponseI } from 'src/app/interfaces/response.interface';
import { ResponsesStoreService } from 'src/app/store/responses.store';

@Component({
  selector: 'app-responses-section',
  templateUrl: './responses-section.component.html',
  styleUrls: ['./responses-section.component.scss'],
})
export class ResponsesSectionComponent {
  @ViewChildren('responsesDOMLI')
  responsesDOMLI!: QueryList<any>;
  responses$: Observable<ResponseI[]>
  useBreatheAnimation: boolean = false; // Don't animate first respone on initial page load

  constructor(private responsesStore: ResponsesStoreService) {
    this.responses$ = this.responsesStore.responses$
  }

  ngAfterViewInit() {
    this.responsesDOMLI.changes.pipe(delay(0))
    .subscribe(t => {
      // Animate other responses with breathe effect
      this.useBreatheAnimation = true
      document.getElementById("response-section")?.scrollIntoView();
    })
  }


  onClearClick(){
    this.responsesStore.clearResponses()
  }
}
