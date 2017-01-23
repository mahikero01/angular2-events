import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyUpComponent } from './key-up.component'


@NgModule({
    imports: [BrowserModule],
    declarations: [KeyUpComponent],
    bootstrap: [KeyUpComponent]
})

export class AppModule{}