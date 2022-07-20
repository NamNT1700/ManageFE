import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { NavigationModule } from '../navigation/navigation.module';
import { MainLayoutComponent } from './main-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [
    MainLayoutComponent,
]
})
export class MainLayoutModule { }
