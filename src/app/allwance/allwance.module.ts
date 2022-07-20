import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllwanceComponent } from './allwance.component';
import { Route, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

const route: Route[] = [
  {
    path: '',
    component: AllwanceComponent
  }
]

@NgModule({
  declarations: [AllwanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatTableModule,
  ],
  exports: [
    AllwanceComponent,
  ]
})
export class AllwanceModule { }
