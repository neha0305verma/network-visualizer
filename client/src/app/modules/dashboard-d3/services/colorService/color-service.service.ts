import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorServiceService {

  private defaultColor = {
    "Academia": '#C990C0',
      "Consulting": '#A5ABB6',
      "Government": '#8DCC93',
      "Impact Investor": '#4C8EDA',
      "International Agency": '#FFC454',
      "Media": '#D9C8AE',
      "NGO/CBO": '#F79767',
      "People": '#569480',
      "Philanthropy": '#DA7194',
      "Platform": '#57C7E3',
      "Private Sector": '#2BBBAD',
      "Research Institute": '#c51162'
  };

  public colorObj$ = new BehaviorSubject<object>(this.defaultColor);

  constructor() {
  }
}
