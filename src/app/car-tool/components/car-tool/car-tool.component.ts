import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'car-tool',
  templateUrl: './car-tool.component.html',
  styleUrls: ['./car-tool.component.css']
})
export class CarToolComponent implements OnInit {

  public headerText = 'Car Tool';

  constructor() { }

  ngOnInit() {
  }

}
