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

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


import { HttpClientModule } from "@angular/common/http";

import { DataTablesModule } from 'angular-datatables';
import { EditarClienteComponent } from './componentes/cliente/editar-cliente/editar-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuModulosComponent,
    ClienteComponent,
    CrearClienteComponent,
    ListarClientesComponent,
    MenuModuloClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
