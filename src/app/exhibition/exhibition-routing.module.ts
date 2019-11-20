import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionComponent } from './exhibition.component';


const routes: Routes = [
    { path: ':id', component: ExhibitionComponent },
    { path: '', redirectTo: 'current', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExhibitionRoutingModule { }
