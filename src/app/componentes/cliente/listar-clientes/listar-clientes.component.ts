import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Cliente } from 'src/app/clases/cliente/cliente';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  constructor(
    private servicioCliente: ClienteService
  ) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  clientes: Cliente[];

  cargarClientes(){
    this.servicioCliente.obtenerClientes().subscribe(data => {
      this.clientes = [];
        data.forEach(element => {
          let x = element.payload.doc.data();
          x["uid"] = element.payload.doc.id;
          this.clientes.push(x as Cliente);
        });
      console.log(this.clientes);
    });
  }

}
