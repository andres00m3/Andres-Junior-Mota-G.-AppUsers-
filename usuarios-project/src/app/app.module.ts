import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './components/usuario/usuario.service';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    DepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
