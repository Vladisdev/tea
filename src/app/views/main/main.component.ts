import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public showPopup: boolean = false;

  constructor(config: NgbAccordionConfig) {}
}
