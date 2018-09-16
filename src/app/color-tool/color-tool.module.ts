import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolModule } from '.././car-tool/car-tool.module';
import { ColorToolComponent } from './components/color-tool/color-tool.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    CarToolModule,
    ReactiveFormsModule,
  ],
  declarations: [ColorToolComponent],
  exports: [ColorToolComponent],
})
export class ColorToolModule { }
