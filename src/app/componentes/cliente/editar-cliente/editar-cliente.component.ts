import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from 'src/app/clases/cliente/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(
    private servicioCliente: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.servicioCliente.clienteAEditar);
  }

  cliente: Cliente = this.servicioCliente.clienteAEditar;

  formularioCliente = new FormGroup({
    nombres: new FormControl(this.cliente.nombres, [Validators.required]),
    apellidos: new FormControl(this.cliente.apellidos, [Validators.required]),
    direccion: new FormControl(this.cliente.direccion, [Validators.required]),
    telefono: new FormControl(this.cliente.telefono, [Validators.required, Validators.pattern('^[0-9]{8}$')]),
    sexo: new FormControl(this.cliente.sexo, [Validators.required])
  });

  actualizarCliente(){
    let data = {
      uid: this.cliente.uid,
      nombres: this.formularioCliente.controls.nombres.value,
      apellidos: this.formularioCliente.controls.apellidos.value,
      direccion: this.formularioCliente.controls.direccion.value,
      telefono: this.formularioCliente.controls.telefono.value,
      sexo: this.formularioCliente.controls.sexo.value,
      createdAt: this.cliente.createdAt,
      updatedAt: Date()
    }
    
    this.servicioCliente.editarCliente(this.cliente.uid, data).then(
      success => {
        setTimeout(() => {
          this.servicioCliente.clienteAEditar = new Cliente();
          this.router.navigate(['/clientes/listar-clientes']);
        }, 300);
        
      },
      error => {
      }
    );
  }

}
