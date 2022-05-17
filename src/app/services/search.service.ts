import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, map, Observable } from 'rxjs';
import { ResponseI } from '../interfaces/response.interface';
import { SearchRequestResponseI } from '../interfaces/searchRequest.interface';
import { ResponsesStoreService } from '../store/responses.store';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  private isAskingSubject = new BehaviorSubject<boolean>(false);
  isAsking$: Observable<boolean> = this.isAskingSubject.asObservable();

  constructor(private api: APIService, private responsesStore: ResponsesStoreService) {}

  private requestConfig = {
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  search(question: string){
    // Set asking state to true
    this.isAskingSubject.next(true);

    // Send search API request
    this.api.postRequest(this.api.endpoints.QA_curie_001, {
      prompt: question,
      ...this.requestConfig,
    }).pipe(
      // Handle Errors
      catchError((err, obs) => {
        console.error(err)
        return obs
      }),
      // Transform response
      map((resData: SearchRequestResponseI) => {
        const response: ResponseI = {
          question,
          answer: resData.choices[0].text,
        }
        return response
      }),
      // Set asking state to false
      finalize(() => this.isAskingSubject.next(false))
    ).subscribe((data: ResponseI) => {
      this.responsesStore.addNewResponse(data)
    })
  }

}
