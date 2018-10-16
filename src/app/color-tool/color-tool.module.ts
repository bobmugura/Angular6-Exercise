import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorToolComponent } from './components/color-tool/color-tool.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [ColorToolComponent, ColorFormComponent],
  exports: [ColorToolComponent],
})
export class ColorToolModule { }
