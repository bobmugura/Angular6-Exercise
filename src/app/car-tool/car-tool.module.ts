import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolComponent } from './components/car-tool/car-tool.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [CarToolComponent, CarFormComponent],
  exports: [CarToolComponent],
})
export class CarToolModule { }
