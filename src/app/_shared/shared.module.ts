import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationLeafletComponent } from '../_components/information-leaflet/information-leaflet.component';



@NgModule({
  declarations: [InformationLeafletComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InformationLeafletComponent
  ]
})
export class SharedModule { }
