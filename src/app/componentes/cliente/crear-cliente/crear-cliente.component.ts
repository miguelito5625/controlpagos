import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Sweetalert2Service } from 'src/app/servicios/sweetalert2/sweetalert2.service';

declare var $: any;

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(
    private servicioCliente: ClienteService,
    private servicioSwal: Sweetalert2Service
  ) { }

  ngOnInit(): void {

  }

  formularioCliente = new FormGroup({
    nombres: new FormControl('Mario Edgardo', [Validators.required]),
    apellidos: new FormControl('Castanieda Hernandez', [Validators.required]),
    direccion: new FormControl('Zacapa', [Validators.required]),
    telefono: new FormControl('55884477', [Validators.required, Validators.pattern('^[0-9]{8}$')]),
    sexo: new FormControl('Hombre', [Validators.required])
  });

  guardarCliente(formulario) {
    this.validacionDeCampos();

    if (this.formularioCliente.valid) {

      console.log(formulario);
      this.servicioCliente.crearCliente(formulario).then(
        success => {
          this.formularioCliente.reset();
          $('.form-control').removeClass('is-valid');
        },
        error => {
        }
      );

    } else {

      this.servicioSwal.mensajeError('Llene el formulario correctamente');

    }

  }

  validacionDeCampos() {
    if (!this.formularioCliente.controls.nombres.valid) {
      $('#idNombres').addClass('is-invalid');
    } else {
      $('#idNombres').removeClass('is-invalid').addClass('is-valid');
    }

    if (!this.formularioCliente.controls.apellidos.valid) {
      $('#idApellidos').addClass('is-invalid');
    } else {
      $('#idApellidos').removeClass('is-invalid').addClass('is-valid');
    }

    if (!this.formularioCliente.controls.direccion.valid) {
      $('#idDireccion').addClass('is-invalid');
    } else {
      $('#idDireccion').removeClass('is-invalid').addClass('is-valid');
    }

    if (!this.formularioCliente.controls.telefono.valid) {
      $('#idTelefono').addClass('is-invalid');
    } else {
      $('#idTelefono').removeClass('is-invalid').addClass('is-valid');
    }

    if (!this.formularioCliente.controls.sexo.valid) {
      $('#idSexo').addClass('is-invalid');
    } else {
      $('#idSexo').removeClass('is-invalid').addClass('is-valid');
    }
  }

}
