import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sweetalert2Service } from '../sweetalert2/sweetalert2.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private firestore: AngularFirestore,
    private servicioSwal: Sweetalert2Service
  ) { }

  crearCliente(cliente) {
    this.servicioSwal.swalCargando();
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("clientes")
        .add(cliente)
        .then(res => { 
          this.servicioSwal.operacionExitosa('Cliente guardado'); 
          resolve(res); 
        }, err => {
          this.servicioSwal.mensajeError('Ocurrio un error');
          reject(err);
        });
    });
  }

  obtenerClientes() {
    return this.firestore.collection("clientes").snapshotChanges();
  }

}
