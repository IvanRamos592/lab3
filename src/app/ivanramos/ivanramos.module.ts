import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvanramosRoutingModule } from './ivanramos-routing.module';
import { IvanramosComponent } from './ivanramos.component';


@NgModule({
  declarations: [
    IvanramosComponent
  ],
  imports: [
    CommonModule,
    IvanramosRoutingModule
  ]
})
export class IvanramosModule { }
