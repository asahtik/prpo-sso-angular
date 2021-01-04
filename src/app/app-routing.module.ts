import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PrijavaComponent } from './meeting/prijava/prijava.component';
import { PrijaveComponent } from './meeting/prijave/prijave.component';

import { TerminiComponent } from "./meeting/termini/termini.component";

const routes: Routes = [
    {path: '', redirectTo: '/termini', pathMatch: 'full'},
    {path: 'termini', component: TerminiComponent},
    {path: 'prijava/:termin/:method', component: PrijavaComponent},
    {path: 'prijave', component: PrijaveComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
