import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-modulo-pagos',
  templateUrl: './menu-modulo-pagos.component.html',
  styleUrls: ['./menu-modulo-pagos.component.css']
})
export class MenuModuloPagosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paginasModulo = [
    {
      titulo: 'Registrar Pago',
      descripcion: '',
      imagen: '/assets/imagenes/modulos/pagos/generar-pago.png',
      urlPagina: '/pagos/generar-pago'
    },
    {
      titulo: 'Consultar Pagos',
      descripcion: '',
      imagen: '/assets/imagenes/modulos/pagos/consultar-pagos.png',
      urlPagina: '/pagos/consultar-pagos'
    }
  ]

}
