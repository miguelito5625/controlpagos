import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Cliente } from 'src/app/clases/cliente/cliente';
import { FormControl } from '@angular/forms';
import { PagoService } from 'src/app/servicios/pago/pago.service';
import { Pago } from 'src/app/clases/pago/pago';

import * as moment from 'moment';


declare var $: any;

@Component({
  selector: 'app-consultar-pagos',
  templateUrl: './consultar-pagos.component.html',
  styleUrls: ['./consultar-pagos.component.css']
})
export class ConsultarPagosComponent implements OnInit {

  constructor(
    private servicioCliente: ClienteService,
    protected servicioPago: PagoService
  ) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  clientes: Cliente[];
  pagos: Pago[];

  clienteSelect = new FormControl('');
  p: number = 1;
  itemsPerPage: number = 5;
  currentPage: number = 1;
    // collection: any[] = someArrayOfThings;  

  cargarClientes() {
    this.servicioCliente.obtenerClientes().subscribe(data => {
      this.clientes = [];
      data.forEach(element => {
        let x = element.payload.doc.data();
        x["uid"] = element.payload.doc.id;
        this.clientes.push(x as Cliente);
      });
      setTimeout(() => {
        $('#idSelectClientes').selectpicker('refresh');
      }, 300);
      
    });
  }

  

  onChangeCliente(){
    console.log(this.clienteSelect.value);

    this.servicioPago.obtenerPagosPorCliente(this.clienteSelect.value).subscribe(data => {
      this.pagos = [];
      data.forEach(element => {
        let x = element.payload.doc.data();
        x["uid"] = element.payload.doc.id;
        this.pagos.push(x as Pago);
      });
      console.log(this.pagos);
      
    });
    
  }

  formatearFecha(fecha){
    moment.locale('es');
    return moment(fecha).format('DD [de] MMMM [del] YYYY');
  }

  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

}
