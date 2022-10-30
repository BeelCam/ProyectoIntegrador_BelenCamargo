import { Injectable } from '@angular/core';
import {injectable} from '@angular/core';
import {Observable} from '@angular/core';
import {Proyecto} from '../model/proyecto';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = ' https://bkdargentina.herokuapp.com/proyecto';
  constructor() { }
  plublic list(): Obeservable<Proyecto[](
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'lista');
  )
}
