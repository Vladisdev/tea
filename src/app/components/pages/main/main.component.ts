import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  public showPopup: boolean = false;
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;

  constructor(config: NgbAccordionConfig) {
    this.observable = new Observable<boolean>(observer => {
      setTimeout(() => {
        observer.next(true);
      }, 10000);
    });

    config.closeOthers = true;
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe(param => {
      if (param) {
        this.showPopup = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
