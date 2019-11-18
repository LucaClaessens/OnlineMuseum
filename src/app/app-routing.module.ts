import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';


const routes: Routes = [
  { path: 'entrance', component: EntranceComponent },
  { path: 'exhibition', loadChildren: () => import('./exhibition/exhibition.module').then(m => m.ExhibitionModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: '', redirectTo: 'entrance', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
