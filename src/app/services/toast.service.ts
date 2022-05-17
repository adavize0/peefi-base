import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
  providedIn: "root"
})

export class ToastService{
  private toastSubject$ = new Subject<string>()
  public messageStream = this.toastSubject$.asObservable()

  constructor(){}

  addToast(message: string){
    this.toastSubject$.next(message)
  }
}
