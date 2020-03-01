import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuModulosComponent } from './componentes/menu-modulos/menu-modulos.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ListarClientesComponent } from './componentes/cliente/listar-clientes/listar-clientes.component';
import { CrearClienteComponent } from './componentes/cliente/crear-cliente/crear-cliente.component';
import { MenuModuloClienteComponent } from './componentes/cliente/menu-modulo-cliente/menu-modulo-cliente.component';


const routes: Routes = [
  {
    path: '',
    component: MenuModulosComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: MenuModuloClienteComponent
      },
      {
        path: 'listar-clientes',
        component: ListarClientesComponent
      },
      {
        path: 'crear-cliente',
        component: CrearClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
