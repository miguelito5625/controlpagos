import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/clases/cliente/cliente';

declare var $: any;

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  dtOptions: any= {};
  persons: Cliente[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Cliente> = new Subject();

  constructor(
    private servicioCliente: ClienteService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      // select: true,
      language: {
        "url": "/assets/datatables/spanish.json"
      },
      lengthMenu: [[5, 10, 50, -1], [5, 10, 50, "Todos"]],
      // pageLength: 2,
      // rowCallback: (row: Node, data: Cliente[] | Object, index: number) => {
      //   const self = this;
      //   // Unbind first in order to avoid any duplicate handler
      //   // (see https://github.com/l-lin/angular-datatables/issues/87)
      //   $('td', row).unbind('click');
      //   $('td', row).bind('click', () => {
      //     let cliente = {
      //       nombres: data[0],
      //       apellidos: data[1],
      //       direccion: data[2],
      //       telefono: data[3],
      //     }
      //     self.eventoClickFilaTabla(cliente);
      //   });
      //   return row;
      // }
    };

    this.cargarClientes();

  }

  // ngOnDestroy() {
  //   this.dtTrigger.unsubscribe();
  // }

  clientes: Cliente[];

  cargarClientes() {
    let unsub = this.servicioCliente.obtenerClientes().subscribe(data => {
      this.clientes = [];
      data.forEach(element => {
        let x = element.payload.doc.data();
        x["uid"] = element.payload.doc.id;
        this.clientes.push(x as Cliente);
      });
      $('#idTablaClientes').DataTable().destroy();
      this.persons = this.clientes;
      this.dtTrigger.next();
      unsub.unsubscribe();
      console.log(this.clientes);
      
    });

  }

  // eventoClickFilaTabla(info: any): void {
  //   console.log(info);
  // }

  borrarCliente(cliente){
    console.log(cliente);
    
  }

  editarCliente(cliente){
    console.log(cliente);
    
  }

}
