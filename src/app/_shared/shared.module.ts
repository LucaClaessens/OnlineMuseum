import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfChangesDirective } from '../_directives/if-changes.directive';
import { ObjectThumbnailComponent } from '../_components/object-thumbnail/object-thumbnail.component';
import { RouterModule } from '@angular/router';
import { ContentTabComponent } from '../_components/content-tab/content-tab.component';



@NgModule({
  declarations: [
    ObjectThumbnailComponent,
    IfChangesDirective,
    ContentTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ObjectThumbnailComponent,
    IfChangesDirective,
    ContentTabComponent,
  ]
})
export class SharedModule { }
