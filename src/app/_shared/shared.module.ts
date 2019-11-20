import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationLeafletComponent } from '../_components/information-leaflet/information-leaflet.component';
import { IfChangesDirective } from '../_directives/if-changes.directive';
import { ObjectThumbnailComponent } from '../_components/object-thumbnail/object-thumbnail.component';
import { NavigationComponent } from '../_components/navigation/navigation.component';



@NgModule({
  declarations: [
    InformationLeafletComponent,
    ObjectThumbnailComponent,
    IfChangesDirective,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    InformationLeafletComponent,
    ObjectThumbnailComponent,
    IfChangesDirective
  ]
})
export class SharedModule { }
