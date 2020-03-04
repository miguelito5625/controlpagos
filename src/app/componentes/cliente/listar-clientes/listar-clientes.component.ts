import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Subject } from 'rxjs';
import { Cliente } from 'src/app/clases/cliente/cliente';
import { Router } from '@angular/router';
import Responsive from 'datatables.net-responsive';


declare var $: any;

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit, OnDestroy, AfterViewInit {

  // dtOptions: DataTables.Settings = {};
  dtOptions: any= {};
  // persons: Cliente[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Cliente> = new Subject();

  constructor(
    private servicioCliente: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: {
        details: {
            renderer: Responsive.renderer.listHiddenNodes()
        }
    },
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

    // this.cargarClientes();

  }

  ngAfterViewInit(){
    this.cargarClientes();
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
    this.promesaCargaClientes.unsubscribe();
  }

  clientes: Cliente[];

  promesaCargaClientes:any;
  cargarClientes() {
    this.promesaCargaClientes = this.servicioCliente.obtenerClientes().subscribe(data => {
      this.clientes = [];
      data.forEach(element => {
        let x = element.payload.doc.data();
        x["uid"] = element.payload.doc.id;
        this.clientes.push(x as Cliente);
      });
      $('#idTablaClientes').DataTable().destroy();
      setTimeout(() => {
        this.dtTrigger.next();
      }, 300);
      
    });

  }

  // eventoClickFilaTabla(info: any): void {
  //   console.log(info);
  // }

  borrarCliente(cliente){
    this.servicioCliente.borrarCliente(cliente.uid).then(
      success => {
        console.log('borrado');        
        // setTimeout(() => {
        //   // this.ngOnInit();
        //   this.cargarClientes();
        // }, 500);
      },
      error => {
      }
    );
  }

  editarCliente(cliente){
    // console.log(cliente);
    this.servicioCliente.clienteAEditar = cliente;
    this.router.navigate(['/clientes/editar-cliente']);
  }

}
