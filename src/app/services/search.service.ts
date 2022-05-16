import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponsesStoreService } from '../store/responses.store';
import { APIService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private isAskingSubject = new BehaviorSubject<boolean>(false);
  isAsking$: Observable<boolean> = this.isAskingSubject.asObservable();

  // performSearch(question: string): Observable<T>{
  //   this.isAskingSubject.next(true)
  //   return this.api_service()
  // }
  constructor(
    private api_service: APIService,
    responsesStore: ResponsesStoreService
  ) {}

  search(question: string) {}
}
