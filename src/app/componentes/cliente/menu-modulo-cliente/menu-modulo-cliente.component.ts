import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-modulo-cliente',
  templateUrl: './menu-modulo-cliente.component.html',
  styleUrls: ['./menu-modulo-cliente.component.css']
})
export class MenuModuloClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paginasModulo = [
    {
      titulo: 'Crear Cliente',
      descripcion: '',
      imagen: '/assets/imagenes/modulos/cliente/crear-cliente.png',
      urlPagina: '/clientes/crear-cliente'
    },
    {
      titulo: 'Listar Clientes',
      descripcion: '',
      imagen: '/assets/imagenes/modulos/cliente/listar-clientes.png',
      urlPagina: '/clientes/listar-clientes'
    }
  ]

}
