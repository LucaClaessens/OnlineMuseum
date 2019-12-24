import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { ExhibitionNavigationComponent } from './exhibition-navigation/exhibition-navigation.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ExhibitionAboutComponent } from './exhibition-about/exhibition-about.component';
import { ExhibitionObjectListComponent } from './exhibition-object-list/exhibition-object-list.component';
import { AmphoraPageComponent } from './exhibition-content/amphora-page/amphora-page.component';
import { ExhibitionNotFoundComponent } from './exhibition-content/exhibition-not-found/exhibition-not-found.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { TimelineComponent } from './exhibition-content/amphora-page/timeline/timeline.component';
import { YearAgePipe } from '../_pipes/year-age.pipe';
import { AmphoraCardComponent } from './exhibition-content/amphora-page/amphora-card/amphora-card.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';



@NgModule({
  declarations: [
    ExhibitionComponent,
    ExhibitionNavigationComponent,
    ExhibitionAboutComponent,
    ExhibitionObjectListComponent,
    AmphoraPageComponent,
    ExhibitionNotFoundComponent,
    TimelineComponent,
    YearAgePipe,
    AmphoraCardComponent
  ],
  imports: [
    TooltipModule,
    CommonModule,
    ExhibitionRoutingModule,
    SharedModule,
    DragScrollModule,
    DeferLoadModule
  ],
  entryComponents: [AmphoraPageComponent, ExhibitionNotFoundComponent]
})
export class ExhibitionModule { }
