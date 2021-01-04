import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import { MainAppComponent } from './meeting/main-app/main-app.component';
import { TerminiComponent } from './meeting/termini/termini.component';
import { TstodatePipe } from './tstodate.pipe';
import { PrijavaComponent } from './meeting/prijava/prijava.component';
import { PrijaveComponent } from './meeting/prijave/prijave.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        MainAppComponent,
        TerminiComponent,
        TstodatePipe,
        PrijavaComponent,
        PrijaveComponent
    ],
    providers: [],
    bootstrap: [MainAppComponent]
})
export class AppModule {
}

