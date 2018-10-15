import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'car-tool',
  templateUrl: './car-tool.component.html',
  styleUrls: ['./car-tool.component.css']
})
export class CarToolComponent implements OnInit {

  public headerText = 'Car Tool';
  public cars: Car[] = [
    { id: 1, make: 'Honda', model: 'Prelude', year: 2001, color: 'black', price: 10000 },
    { id: 2, make: 'BMW', model: '328i', year: 2007, color: 'silver', price: 40000 },
  ]

  constructor() { }

  ngOnInit() {
  }

  addCar(car: Car) {
    const carToAdd = {
      ...car,
      id: Math.max(...this.cars.map(c => c.id)) + 1,
    };

    this.cars = [...this.cars, carToAdd];
  }
}
