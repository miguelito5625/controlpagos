import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sweetalert2Service } from '../sweetalert2/sweetalert2.service';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(
    private firestore: AngularFirestore,
    private servicioSwal: Sweetalert2Service
  ) { }

  obtenerPagos() {
    return this.firestore.collection("pagos").snapshotChanges();
  }

  obtenerPagosPorCliente(uidCliente) {
    // return this.firestore.collection("pagos").snapshotChanges();
    return this.firestore.collection('pagos', ref => ref.where('uidCliente','==', uidCliente )).snapshotChanges();
  }

  crearPago(pago) {
    this.servicioSwal.swalCargando();
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("pagos")
        .add(pago)
        .then(res => {
          this.servicioSwal.operacionExitosa('Pago guardado');
          resolve(res);
        }, err => {
          this.servicioSwal.mensajeError('Ocurrio un error');
          reject(err);
        });
    });
  }

}
