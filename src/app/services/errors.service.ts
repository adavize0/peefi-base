import { Injectable } from "@angular/core";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: "root"
})

export class ErrorService {
  constructor(private toastService: ToastService){}
  showError(error: string){
    this.toastService.addToast(error)
  }
}
