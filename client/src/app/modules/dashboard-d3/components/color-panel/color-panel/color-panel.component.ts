import { Component, OnInit } from '@angular/core';

import {ColorServiceService} from './../../../services/colorService/color-service.service';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {

  public colorObject = undefined;
  public objectKeys = [];
  public colorData = [];
  public showDropDown = true;
  constructor(private colorSrvc: ColorServiceService) { }

  ngOnInit() {
    // get color panel details
    this.colorSrvc.colorObj$.subscribe(data => {
      this.colorObject = data;
      // console.log('color object is ', this.colorObject);
      this.objectKeys = Object.keys(this.colorObject);

      this.processColors(this.objectKeys, this.colorObject);
      // console.log('processed color data is ', this.colorData);
    });
  }

  processColors(keyArray, colorObj) {
    if (!!keyArray.length || !!Object.keys(colorObj).length) {
      // both have the data , kindly process
      keyArray.map(key => {
        // for each key create a new object which has item name and item color
        this.colorData.push({name: key, color: colorObj[key]});
      });
    } else {
      console.log('empty key Array or colorObj in color panel');
      return [];
    }
  }

  toggleDropdown() {
    this.showDropDown = !this.showDropDown;
  }

}
