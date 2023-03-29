import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvanramosComponent } from './ivanramos.component';

const routes: Routes = [{ path: '', component: IvanramosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvanramosRoutingModule { }
