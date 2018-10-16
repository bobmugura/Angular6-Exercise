import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolComponent } from './components/car-tool/car-tool.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarTableRowComponent } from './components/car-table-row/car-table-row.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [CarToolComponent, CarFormComponent, CarTableComponent, CarTableRowComponent],
  exports: [CarToolComponent],
})
export class CarToolModule { }
