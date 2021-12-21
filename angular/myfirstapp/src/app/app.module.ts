import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyserviceService } from './myservice.service';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactivefrmComponent } from './reactivefrm/reactivefrm.component';
import { TemplatenewComponent } from './templatenew/templatenew.component';


//it is importing AppComponent 
//from app.component.ts which is present in app folder

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    TemplateformComponent,
    ReactivefrmComponent,
    TemplatenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

// this is exporting to main.ts file
