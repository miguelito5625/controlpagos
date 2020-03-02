import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';


@Injectable({
  providedIn: 'root'
})
export class InternetstatusService {

  constructor(
    private connectionService: ConnectionService
  ) { 
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
      console.log('cambio');
      
    })
  }
  status = 'ONLINE';
  isConnected = true;
}
