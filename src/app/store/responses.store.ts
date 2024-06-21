import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { ResponseI } from '../interfaces/response.interface';

const LOCAL_STORAGE_KEY = 'responses';

@Injectable({
  providedIn: 'root',
})
export class ResponsesStoreService {
  private responsesSubject = new BehaviorSubject<ResponseI[]>([]);
  responses$: Observable<ResponseI[]> = this.responsesSubject.asObservable();
  constructor() {
    // Load from local storage on initialize
    const loadedResponses = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (loadedResponses != null) {
      this.responsesSubject.next(JSON.parse(loadedResponses) as ResponseI[]);
    }
  }

  addNewResponse(response: ResponseI) {
    const loadedResponses = localStorage.getItem(LOCAL_STORAGE_KEY);

    let newData;
    if (loadedResponses != null) {
      newData = [response, ...JSON.parse(loadedResponses)];
    } else {
      newData = [response];
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    this.responsesSubject.next(newData);
  }

  demoResponse(question: string){
    this.addNewResponse({
      question: `[DEMO] ${question}`,
      answer: "Hi there! This is a demo response I put because my developer subscription on OpenAI isn't active right now. Thanks for understanding :)"
    })
  }

  clearResponses(): void {
    const confirmation: boolean = window.confirm(
      'Are you sure you want to clear the response history?'
    );
    if (!confirmation) return;

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.responsesSubject.next([]);
  }
}
