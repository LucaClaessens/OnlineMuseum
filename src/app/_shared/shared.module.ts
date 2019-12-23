import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfChangesDirective } from '../_directives/if-changes.directive';
import { ObjectThumbnailComponent } from '../_components/object-thumbnail/object-thumbnail.component';
import { RouterModule } from '@angular/router';
import { ContentTabComponent } from '../_components/content-tab/content-tab.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownLoaderComponent } from './markdown-loader/markdown-loader.component';
import { LoaderComponent } from './loader/loader.component';
import { SafePipe } from './../_pipes/safe.pipe';
import { FloorplanComponent } from './floorplan/floorplan.component';



@NgModule({
  declarations: [
    ObjectThumbnailComponent,
    IfChangesDirective,
    ContentTabComponent,
    MarkdownLoaderComponent,
    LoaderComponent,
    SafePipe,
    FloorplanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  exports: [
    ObjectThumbnailComponent,
    IfChangesDirective,
    ContentTabComponent,
    MarkdownLoaderComponent,
    FloorplanComponent,
    SafePipe
  ]
})
export class SharedModule { }
