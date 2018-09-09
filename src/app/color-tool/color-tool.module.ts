import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarToolModule } from '.././car-tool/car-tool.module';
import { ColorToolComponent } from './components/color-tool/color-tool.component';



@NgModule({
  imports: [
    CommonModule,
    CarToolModule,
  ],
  declarations: [ColorToolComponent],
  exports: [ColorToolComponent],
})
export class ColorToolModule { }
