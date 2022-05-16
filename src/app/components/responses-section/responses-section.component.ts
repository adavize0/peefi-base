import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/interfaces/response.interface';
import { ResponsesStoreService } from 'src/app/store/responses.store';

@Component({
  selector: 'app-responses-section',
  templateUrl: './responses-section.component.html',
  styleUrls: ['./responses-section.component.scss']
})
export class ResponsesSectionComponent {

  responses$: Observable<ResponseI[]>

  constructor(private responsesStore: ResponsesStoreService) {
    this.responses$ = this.responsesStore.responses$
  }

  onClearClick(){
    this.responsesStore.clearResponses()
  }
}
