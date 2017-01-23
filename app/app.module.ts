import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyUpComponent } from './key-up.component'
import { KeyUpEnterComponent } from './key-up-enter.component'


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, KeyUpComponent, KeyUpEnterComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}