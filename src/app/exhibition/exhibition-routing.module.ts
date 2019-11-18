import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionComponent } from './exhibition.component';


const routes: Routes = [
    { path: ':id/:showDetails', component: ExhibitionComponent },
    { path: '', redirectTo: 'current/false', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExhibitionRoutingModule { }
