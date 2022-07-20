import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationService } from './navigation.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
  ],
  exports:[
    NavigationComponent,
  ],
  providers:[
    NavigationService,
  ]
})
export class NavigationModule { }
