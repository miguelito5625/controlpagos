import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-modulos',
  templateUrl: './menu-modulos.component.html',
  styleUrls: ['./menu-modulos.component.css']
})
export class MenuModulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaModulos = [
    {
      titulo: 'Clientes',
      descripcion: 'Modulo para la gestion de clientes',
      imagen: '/assets/imagenes/menus/principal/modulo-clientes.png',
      urlModulo: '/clientes'
    },
    {
      titulo: 'Pagos',
      descripcion: 'Modulo para la gestion de los pagos',
      imagen: '/assets/imagenes/menus/principal/modulo-pagos.png',
      urlModulo: '/pagos'
    }
  ]

}
