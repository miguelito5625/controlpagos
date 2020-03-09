import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Cliente } from 'src/app/clases/cliente/cliente';
import { PagoService } from 'src/app/servicios/pago/pago.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-generar-pago',
  templateUrl: './generar-pago.component.html',
  styleUrls: ['./generar-pago.component.css']
})
export class GenerarPagoComponent implements OnInit {

  constructor(
    private servicioCliente: ClienteService,
    private servicioPAgo: PagoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarClientes();
    // $('#idSelectClientes').addClass('is-invalid');
    setTimeout(() => {
      $('#idSelectMeses').selectpicker('refresh');
    }, 300);
  }

  clientes: Cliente[];
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  totalAPagar = 0;

  formularioPago = new FormGroup({
    meses: new FormControl('', [Validators.required]),
    cliente: new FormControl('', [Validators.required])
  });

  guardarPago(formulario){
   let pago = {
    uidCliente: this.formularioPago.controls.cliente.value,
    fechaPago: Date(),
    mesesPagados: this.formularioPago.controls.meses.value,
    totalPagado: String(this.formularioPago.controls.meses.value.length*20)
  }  

   this.servicioPAgo.crearPago(pago).then(
    success => {
      console.log('pago creado');
      this.router.navigateByUrl('/pagos');
    },
    error => {
      console.log('error en el pagoo', error);
    }
  );

  }

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

  calcularTotalMeses(){
    console.log(this.formularioPago.controls.meses.value.length);
    this.totalAPagar = this.formularioPago.controls.meses.value.length*20
  }

}
