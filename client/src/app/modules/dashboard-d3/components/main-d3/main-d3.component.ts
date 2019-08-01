import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-d3',
  templateUrl: './main-d3.component.html',
  styleUrls: ['./main-d3.component.scss']
})
export class MainD3Component implements OnInit {

  public clickedEvent: String;
  public totalTypesArray = [];
  constructor() { }

  ngOnInit() {
  }
  
  childEventClicked(event: String) {
    this.clickedEvent = event;
  }

  sendTypes(event) {
    if (!!event && event.length > 0) {
      console.log('sending types', event);
      this.totalTypesArray = event;
    }
  }
}
