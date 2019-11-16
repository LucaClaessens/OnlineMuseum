import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';



@NgModule({
  declarations: [ExhibitionComponent, ExhibitionDetailsComponent],
  imports: [
    CommonModule,
    ExhibitionRoutingModule,
    SharedModule
  ]
})
export class ExhibitionModule { }
