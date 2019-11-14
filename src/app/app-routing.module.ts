import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';


const routes: Routes = [
  { path: '', redirectTo: 'entrance', pathMatch: 'full' },
  { path: 'entrance', component: EntranceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
