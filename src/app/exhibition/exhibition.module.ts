import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';
import { ExhibitionNavigationComponent } from './exhibition-navigation/exhibition-navigation.component';



@NgModule({
  declarations: [ExhibitionComponent, ExhibitionDetailsComponent, ExhibitionNavigationComponent],
  imports: [
    CommonModule,
    ExhibitionRoutingModule,
    SharedModule
  ]
})
export class ExhibitionModule { }
