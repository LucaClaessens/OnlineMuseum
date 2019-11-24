import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationLeafletComponent } from '../_components/information-leaflet/information-leaflet.component';
import { IfChangesDirective } from '../_directives/if-changes.directive';
import { ObjectThumbnailComponent } from '../_components/object-thumbnail/object-thumbnail.component';
import { NavigationComponent } from '../_components/navigation/navigation.component';
import { AnchorButtonComponent } from '../_components/anchor-button/anchor-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InformationLeafletComponent,
    ObjectThumbnailComponent,
    IfChangesDirective,
    NavigationComponent,
    AnchorButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    InformationLeafletComponent,
    ObjectThumbnailComponent,
    AnchorButtonComponent,
    IfChangesDirective
  ]
})
export class SharedModule { }
