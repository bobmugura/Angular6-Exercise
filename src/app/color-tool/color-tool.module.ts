import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorToolComponent } from './components/color-tool/color-tool.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorFormComponent } from './components/color-form/color-form.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [ColorToolComponent, ColorFormComponent],
  exports: [ColorToolComponent],
})
export class ColorToolModule { }
