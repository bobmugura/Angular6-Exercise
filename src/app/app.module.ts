import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ColorToolModule } from './color-tool/color-tool.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
