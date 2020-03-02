import { Injectable } from '@angular/core';
declare var Swal: any;
@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {

  constructor() { }

  swalCargando() {
    Swal.fire({
      title: 'Procesando',
      html: 'Por favor, espere...',
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        
      },
      onClose: () => {
       
      }
    });

  }

  cerrarSwal(){
    Swal.close();
  }

  operacionExitosa(mensaje: string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    
    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  mensajeError(mensaje: string){
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: mensaje
    })
  }

}
