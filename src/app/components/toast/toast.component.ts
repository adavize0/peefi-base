import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  messageQueue: string[] = []
  message: string | undefined;

  private startDisplay (message: string){
    this.message = message
    setTimeout(() => {
      this.message = "";

      if(this.messageQueue.length){
        this.startDisplay(this.messageQueue.shift() as string)
      }
    }, 2000)
  }

  constructor(private toastService: ToastService) {

    this.toastService.messageStream.subscribe(data => {
      if(!data) return;

      // Add new data to the queue
      this.messageQueue.push(data);

      // Start if queue was previously empty
      if(!this.message && this.messageQueue.length){
        this.startDisplay(this.messageQueue.shift() as string)
      }
    })
  }

  ngOnInit(): void {
  }

}
