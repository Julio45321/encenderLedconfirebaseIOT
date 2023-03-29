import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  constructor(private http:HttpClient) { }

  estado(){
    return this.http.get<boolean>("https://apagador810ad-default-rtdb.firebaseio.com/estado.json")
    }



  actualizar(estado:boolean){
    return this.http.put<boolean>("https://apagador810ad-default-rtdb.firebaseio.com/estado.json",estado)
  }
}
