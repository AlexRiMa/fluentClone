import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { TrabajoInfoComponent } from './trabajo-info/trabajo-info.component';
import { TrabajoComponent } from './trabajo/trabajo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaTrabajosComponent,
    FormComponent,
    HeaderComponent,
    TrabajoInfoComponent,
    TrabajoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
