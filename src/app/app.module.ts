import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    FormComponent,
    ListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,       
    FormsModule,        
    ReactiveFormsModule 

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }