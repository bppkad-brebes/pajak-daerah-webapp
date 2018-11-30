import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public urlSimdaService = "http://bppkad.brebeskab.go.id:3737";
  public urlPbbBiller = "http://bppkad.brebeskab.go.id:3738";

  constructor() { }
}
