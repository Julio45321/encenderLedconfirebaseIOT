import { IotService } from './../servicio/iot.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  estado:boolean = false;

  constructor(private servicio:IotService) {}


ngOnInit(){
this.servicio.estado().subscribe(
  (resp:boolean)=>{
    this.estado=resp
  }
)
}

cambio(estado:boolean){
  this.servicio.actualizar(estado).subscribe(
    (resp:boolean)=>{
      this.estado=resp
    }
  )
}



}

