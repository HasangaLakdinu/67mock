import { Component, OnInit,OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-objective-overall',
  templateUrl: './objective-overall.component.html',
  styleUrls: ['./objective-overall.component.scss']
})
export class ObjectiveOverallComponent implements OnInit {

  
  
  subscription: Subscription;
  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(() => {
      console.log('clicked')
    
    });
   }

   ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

  ngOnInit() {
  }

}
