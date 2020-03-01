import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModulosComponent } from './componentes/menu-modulos/menu-modulos.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { CrearClienteComponent } from './componentes/cliente/crear-cliente/crear-cliente.component';
import { ListarClientesComponent } from './componentes/cliente/listar-clientes/listar-clientes.component';
import { MenuModuloClienteComponent } from './componentes/cliente/menu-modulo-cliente/menu-modulo-cliente.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuModulosComponent,
    ClienteComponent,
    CrearClienteComponent,
    ListarClientesComponent,
    MenuModuloClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
