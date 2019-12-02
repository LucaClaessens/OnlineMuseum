import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { ExhibitionNavigationComponent } from './exhibition-navigation/exhibition-navigation.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ExhibitionAboutComponent } from './exhibition-about/exhibition-about.component';
import { ExhibitionObjectListComponent } from './exhibition-object-list/exhibition-object-list.component';



@NgModule({
  declarations: [ExhibitionComponent, ExhibitionNavigationComponent, ExhibitionAboutComponent, ExhibitionObjectListComponent],
  imports: [
    TooltipModule,
    CommonModule,
    ExhibitionRoutingModule,
    SharedModule
  ]
})
export class ExhibitionModule { }
