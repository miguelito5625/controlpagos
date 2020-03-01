import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formularioCliente = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    genero: new FormControl('')
  });

  guardarCliente(formulario){
    console.log(formulario);
  }

}
