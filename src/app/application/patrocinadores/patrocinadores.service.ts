import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadoresService {

  constructor() {
   }
  public getPatrocinadores() {
    return [
      {
        id:1,
        nombre:"Pepsi",
        contacto:"Juan Perez",
        telefono:"123456789",
        usuarios:3,
      },
      {
        id:2,
        nombre:"Coca Cola",
        contacto:"Pedro Perez",
        telefono:"123456789",
        usuarios:3,
      },
      {
        id:3,
        nombre:"Cerveza Corona",
        contacto:"Jose Perez",
        telefono:"123456789",
        usuarios:1,
      },
      {
        id:4,
        nombre:"Cerveza Modelo",
        contacto:"Maria Perez",
        telefono:"123456789",
        usuarios:3,
      },
      {
        id:5,
        nombre:"Cerveza Victoria",
        contacto:"Luis Perez",
        telefono:"123456789",
        usuarios:0,
      }
    ]
  }
}
