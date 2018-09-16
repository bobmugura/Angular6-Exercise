import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'color-tool',
  templateUrl: './color-tool.component.html',
  styleUrls: ['./color-tool.component.css']
})
export class ColorToolComponent implements OnInit {

  public headerText = 'Color Tool';
  public colors = ['red', 'green', 'blue'];

  constructor() { }

  ngOnInit() {
  }

  addColor(color: string) {
    this.colors = this.colors.concat(color);
  }

}
