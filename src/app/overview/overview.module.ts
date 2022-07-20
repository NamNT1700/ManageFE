import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

const route: Route[] = [
  {
    path: '',
    component: OverviewComponent
  }
]

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class OverviewModule { }
