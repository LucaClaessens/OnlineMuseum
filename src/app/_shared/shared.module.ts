import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationLeafletComponent } from '../_components/information-leaflet/information-leaflet.component';
import { IfChangesDirective } from '../_directives/if-changes.directive';



@NgModule({
  declarations: [
    InformationLeafletComponent,
    IfChangesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InformationLeafletComponent,
    IfChangesDirective
  ]
})
export class SharedModule { }
