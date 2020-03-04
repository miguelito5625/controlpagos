import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sweetalert2Service } from '../sweetalert2/sweetalert2.service';
import { Cliente } from 'src/app/clases/cliente/cliente';

declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private firestore: AngularFirestore,
    private servicioSwal: Sweetalert2Service
  ) { }

  clienteAEditar: Cliente = new Cliente();

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

  obternetClientes2(){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('clientes').snapshotChanges().subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  obtenerClientes() {
    return this.firestore.collection("clientes").snapshotChanges();
  }

  borrarCliente(id) {

    return new Promise<any>((resolve, reject) => {

      Swal.fire({
        title: 'Eliminar el cliente?',
        text: "Una vez eliminado no se podra recuperar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Si, eliminarlo!'
      }).then((result) => {
        if (result.value) {          
          this.servicioSwal.swalCargando();
          this.firestore
            .collection("clientes")
            .doc(id)
            .delete()
            .then(res => {
              this.servicioSwal.operacionExitosa('Cliente eliminado');
              resolve(res);
            }, err => {
              this.servicioSwal.mensajeError('Ocurrio un error');
              reject(err);
            });
        }else{
          reject('se cancelo la eliminacion del cliente');
        }
        
      });


    });
  }

  editarCliente(id, cliente) {
    this.servicioSwal.swalCargando();
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("clientes")
        .doc(id)
        .set(cliente)
        .then(res => {
          this.servicioSwal.operacionExitosa('Cliente modificado');
          resolve(res);
        }, err => {
          this.servicioSwal.mensajeError('Ocurrio un error');
          reject(err);
        });
    });
  }

}
